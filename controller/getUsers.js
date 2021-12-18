const { getConnection } = require('../dbConnection')
const connection = getConnection()

function getUsers(parent, args) {
  const query = `SELECT * FROM users`
  let result;
  
  connection.query(query, (err, rows) => {
    if (err) return console.log(err)
    result = rows
    console.log(result)
  })

  return result
}

console.log(getUsers())

module.exports = getUsers