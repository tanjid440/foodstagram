const { getConnection } = require('../dbConnection')

async function getComments(parent, args) {

  const connection = await getConnection()
  const query = `SELECT * FROM comments WHERE pid=${args.pid}`

  let result = await connection.query(query)

  return result
  
}

module.exports = getComments
