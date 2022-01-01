const { getConnection } = require('../dbConnection')

async function getPosts(parent, args) {

  const connection = await getConnection()
  const query = `SELECT * FROM posts`

  let result = await connection.query(query)

  return result
  
}

module.exports = getPosts
