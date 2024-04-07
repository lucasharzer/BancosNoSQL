from dotenv import load_dotenv, find_dotenv
from neo4j import GraphDatabase
import os


class Neo4jDB:
    def __init__(self):
        load_dotenv(find_dotenv())
        protocolo = os.getenv("PROTOCOL")
        host = os.getenv("HOST")
        porta = os.getenv("PORT")
        user = os.getenv("USER")
        password = os.getenv("PASSWORD")

        uri = f"{protocolo}://{host}:{porta}"
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
    
    def create_session(self):
        self.session = self.driver.session()    
        print("sessão criada")

    def insert_item(self, p_nome, p_telefone, p_status):
        query = "CREATE (p:Pessoa {nome: $nome, telefone: $telefone, status: $status}) RETURN p"
        params = {"nome": p_nome, "telefone": p_telefone, "status": p_status}

        with self.session.begin_transaction() as tx:
            resultado = tx.run(query, params)
            print("Item inserido")
            for record in resultado:
                print(record["p"])
    
    def update_item(self, p_nome, p_novo_telefone, p_novo_status):
        query = "MATCH (p:Pessoa {nome: $nome}) SET p.telefone = $novo_telefone, p.status = $novo_status RETURN p"
        params = {"nome": p_nome, "novo_telefone": p_novo_telefone, "novo_status": p_novo_status}

        with self.session.begin_transaction() as tx:
            resultado = tx.run(query, params)
            print("item atualizado")
            for record in resultado:
                print(record["p"])

    def delete_item(self, p_nome):
        query = "MATCH (p:Pessoa {nome: $nome}) DELETE p"
        params = {"nome": p_nome}

        with self.session.begin_transaction() as tx:
            resultado = tx.run(query, params)
            print("Item deletado")
            for record in resultado:
                print(record["p"])

    def select_item(self, p_nome):
        query = "MATCH (p:Pessoa {nome: $nome}) RETURN p"
        params = {"nome": p_nome}

        with self.session.begin_transaction() as tx:
            resultado = tx.run(query, params)
            print("Item encontrado")
            for record in resultado:
                print(record["p"])

    def select_all_items(self):
        query = "MATCH (n) RETURN n LIMIT 5"

        with self.session.begin_transaction() as tx:
            resultado = tx.run(query)
            print("Todos os itens")
            for record in resultado:
                print(record)

    def close_connection(self):
        self.session.close()
