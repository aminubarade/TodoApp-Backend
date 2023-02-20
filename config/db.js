const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "root",
 database: "todoApp",
 port: 8889
});

conn.connect();

module.exports = conn;
