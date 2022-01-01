const { getConnection } = require('../dbConnection')

async function getPostById(parent, args) {

  const connection = await getConnection()
  const query = `SELECT * FROM posts WHERE pid=${args.pid}`

  let result = await connection.query(query)

  return result[0]
  
}

module.exports = getPostById
