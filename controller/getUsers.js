const { getConnection } = require('../dbConnection')

async function getUsers(parent, args) {
  
  const connection = await getConnection()
  const query = `SELECT * FROM users`

  let result = await connection.query(query)

  return result
}

module.exports = getUsers
