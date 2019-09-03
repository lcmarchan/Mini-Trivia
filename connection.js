// CONNECTION CREDENTIALS

const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432, //default from installation
  database: "postgres",
  ssl: false
});
module.exports = credentials;
