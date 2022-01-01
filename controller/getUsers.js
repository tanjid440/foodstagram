const { getConnection } = require('../dbConnection')

async function getUsers(parent, args) {

  const connection = await getConnection()
  const query = `SELECT uid, name, email, address, dob, created_on, token FROM users WHERE uid=${args.uid}`

  let result = await connection.query(query)

  return result[0]
  
}

module.exports = getUsers
