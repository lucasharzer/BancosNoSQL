require("dotenv").config();
const neo4j = require("neo4j-driver");


class Neo4jDB {
    constructor() {
        const protocol = process.env.PROTOCOL;
        const host = process.env.HOST;
        const port = process.env.PORT;
        const user = process.env.USER;
        const pass = process.env.PASSWORD;

        const uri = `${protocol}://${host}:${port}`;
        this.connection = neo4j.driver(uri, neo4j.auth.basic(user, pass));
    }

    async createSession() {
        this.session = this.connection.session();
        console.log("Sessão criada");
    }

    async insertItem(p_nome, p_telefone, p_status) {
        const query = `CREATE (p:Pessoa {nome: $nome, telefone: $telefone, status: $status}) RETURN p`;
        const params = { nome: p_nome, telefone: p_telefone, status: p_status };

        const resultado = await this.session.run(query, params);
        console.log("Item inserido");
        resultado.records.forEach(record => {
            console.log(record.get("p"));
        });
    }

    async updateItem(p_nome, p_novoTelefone, p_novoStatus) {
        const query = `MATCH (p:Pessoa {nome: $nome}) SET p.telefone = $novoTelefone, p.status = $novoStatus RETURN p`;
        const params = { nome: p_nome, novoTelefone: p_novoTelefone, novoStatus: p_novoStatus };

        const resultado = await this.session.run(query, params);
        console.log("Item atualizado");
        resultado.records.forEach(record => {
            console.log(record.get("p"));
        });
    }

    async deleteItem(p_nome) {
        const query = `MATCH (p:Pessoa {nome: $nome}) DELETE p`;
        const params = { nome: p_nome };

        const resultado = await this.session.run(query, params);
        console.log("Item deletado");
        console.log(resultado.summary.counters);
    }

    async selectItem(p_nome) {
        const query = `MATCH (p:Pessoa {nome: $nome}) RETURN p`;
        const params = { nome: p_nome };

        const resultado = await this.session.run(query, params);
        console.log("item encontrado");
        resultado.records.forEach(record => {
            console.log(record.get("p").properties);
        });
    }

    async selectAllItems() {
        const query = `MATCH (n) RETURN n LIMIT 5`;
        const resultado = await this.session.run(query);
        console.log("Todos os itens:")
        resultado.records.forEach(record => {
            console.log(record);
        });
    }

    async closeConnection() {
        await this.session.close();
    }
}


module.exports = Neo4jDB;