const { getConnection } = require('../dbConnection')

async function authUser(parent, args) {

  const connection = await getConnection()
  const query = `SELECT * FROM users WHERE email='${args.email}'`

  let result = await connection.query(query)

  const user = result[0]

  if (user && user.email == args.email) {
    if (user.password == args.password) {
      return { status: 200, user }
    } else {
      return { status: 401, user: null }
    }
  }

  return { status: 404, user: null }
  
}

module.exports = authUser
