# Banco de dados NoSQL - Neo4j

Banco de dados não relacional do tipo grafo;

Fazendo conexão e executando queries básicas (Inserir, Selecionar, atualizar e deletar) no banco de dados Neo4j em execução no Docker usando NodeJS e Python.

# Pacotes
- dotenv: Biblioteca do NodeJS para acessar variáveis de ambiente no .env;
- neo4j-driver: Biblioteca do NodeJS para conexão com Neo4j;
- python-dotenv: Biblioteca do Python para acessar variáveis de ambiente no .env;
- neo4j: Biblioteca do Python para conexão com Neo4j.

# Comandos
- NodeJS | Instalar dependências:
```bash
npm install
```
- NodeJS | Executar testes:
```bash
npm start
```
- Python | Instalar dependências:
```bash
pip install -r requirements.txt
```
- Python | Executar testes:
```bash
python main.py
```
- Docker | Executar contêiner do Neo4j:
```bash
docker run --name <nome do contêiner> -p 7474:7474 -p 7687:7687 -d neo4j
```
- Docker | Listar imagens:
```bash
docker image ls
```
- Docker | Listar contêineres:
```bash
docker ps
```

Obs: Ao executar contêiner é necessário acessar http://localhost:7474/ e criar usuário/senha para autenticação.

# Resultados
- Banco na web
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/ef0fbe39-da04-42b2-a4db-351bacd6386a">
</span>

- NodeJS
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/d038c88f-e49d-4f14-ba86-34228b2025a2">
</span>

- Python
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/9e13ed92-e75f-4a45-a91d-04bf70b4cc8e">
</span>

- Docker
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/cbe0b938-4d10-43a0-bbc7-dee0c1e62edc">
</span>
