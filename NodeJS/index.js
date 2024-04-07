const Neo4jDB = require("./database");


const db = new Neo4jDB();

async function main() {
    try {
        // Criar sessão
        await db.createSession();
        // Inserir um item
        await db.insertItem("Peter Griffin", "5511309682976", 1);
        await db.insertItem("David Johnson", "5511285603478", 0);
        await db.insertItem("Janete Wille", "5511960386532", 1);
        // Atualizar um item
        await db.updateItem("David Johnson", "5511382065184", 1);
        // Deletar um item
        await db.deleteItem("Janete Wille");
        // Selecionar um item específico
        await db.selectItem("Peter Griffin");
        // Selecionar todos os itens
        await db.selectAllItems();
    }catch(erro) {
        console.error(erro);
    }finally {
        // Fechar conexão
        await db.closeConnection();
    }
}


main();