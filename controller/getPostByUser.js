const { getConnection } = require('../dbConnection')

async function getPostByUser(parent, args) {

  const connection = await getConnection()
  const query = `SELECT * FROM posts WHERE uid=${args.uid}`

  let result = await connection.query(query)

  return result
  
}

module.exports = getPostByUser
