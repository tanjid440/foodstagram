const { createConnection, getConnection } = require('./dbConnection')

createConnection()
const connection = getConnection()

const query = `SELECT * FROM users`

connection.query(query, (err, rows) => {
  if (err) return console.log(err)
  console.log(rows)
  connection.close()
})