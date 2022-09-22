// const pg = require("pg");
// const client = pg.Client;

const { Client } = require("pg");

const conexao = {
  user: "postgres",
  host: "127.0.0.1",
  database: "crud_nodeJS",
  password: "postgres",
  port: 5432
};

exports.listar = () => {
  const client = new Client(conexao);
  client.connect();
  const sql = "SELECT * FROM PRODUTOS";
};

client.query(sql, (err, res) => {
  if (err) {
    console.log("Erro", err);
  } else {
    console.log("Resultado", res);
  }
  client.end();
  console.log("Execução depois da query");
});
