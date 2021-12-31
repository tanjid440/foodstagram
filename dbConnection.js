const mariadb = require("mariadb");

let connection = null;

const options = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'foodstagram',
}

async function createConnection() {
  connection = await mariadb.createConnection(options);
}

async function getConnection() {
  if (connection == null) {
    await createConnection()
    return connection
  }
  return connection
}

module.exports = {
  createConnection, getConnection
}