const { getConnection } = require('../dbConnection')

async function addComment(parent, args) {

  const connection = await getConnection()
  const query = `INSERT INTO comments(content, uid, pid) VALUE('${args.content}', '${args.uid}', '${args.pid}')`

  try {
    let result = await connection.query(query)
    return { status: 200 }
  } catch (error) {
    if (error.code == 'ER_DUP_ENTRY')
      return { status: 401 }
  }

  return { status: 500 }
  
}

module.exports = addComment
