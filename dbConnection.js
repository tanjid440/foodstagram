const mariadb = require("mariadb/callback");

let connection = null;

const options = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'foodstagram',
}

function createConnection() {
  connection = mariadb.createConnection(options);
}

function getConnection() {
  if (connection == null) {
    createConnection()
    return connection
  }
  return connection
}

module.exports = {
  createConnection, getConnection
}