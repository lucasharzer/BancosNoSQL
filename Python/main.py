from database import Neo4jDB


try:
    db = Neo4jDB()
    # Criar sessão
    db.create_session()
    # inserir um item
    db.insert_item("Peter Griffin", "5511309682976", 1)
    db.insert_item("David Johnson", "5511285603478", 0)
    db.insert_item("Janete Wille", "5511960386532", 1)
    # Atualizar um item
    db.update_item("David Johnson", "5511382065184", 1)
    # Deletar um item
    db.delete_item("Janete Wille")
    # Selecionar um item específico
    db.select_item("Peter Griffin")
    # Selecionar todos os itens
    db.select_all_items()
except Exception as e:
    print(e)
finally:
    # Fechar sessão
    db.close_connection()
