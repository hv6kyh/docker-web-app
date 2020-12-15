const mysql = require("mysql");

const pool = new mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "1q2w3e4r",
  database: "mydb",
});

exports.pool = pool;
