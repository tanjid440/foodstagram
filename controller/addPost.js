const { getConnection } = require('../dbConnection')

async function addPost(parent, args) {

  const connection = await getConnection()
  const query = `INSERT INTO posts(location, content, image, date, uid) VALUE('${args.location}', '${args.content}', '${args.image}', '${args.date}', '${args.uid}')`

  try {
    let result = await connection.query(query)
    return { status: 200 }
  } catch (error) {
    if (error.code == 'ER_DUP_ENTRY')
      return { status: 401 }
  }

  return { status: 500 }
  
}

module.exports = addPost
