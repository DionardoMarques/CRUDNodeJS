const { Pool, Client } = require("pg");
const client = new Client();
await client.connect();

const pool = new Pool({
  user: "dbuser",
  host: "database.server.com",
  database: "mydb",
  password: "",
  port: 3211
});
