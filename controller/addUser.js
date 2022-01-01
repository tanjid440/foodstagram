const { getConnection } = require('../dbConnection')

async function addUser(parent, args) {

  const connection = await getConnection()
  const query = `INSERT INTO users(name, email, password, address, dob, created_on) VALUE('${args.name}', '${args.email}', '${args.password}', '${args.address}', '${args.dob}', '${args.created_on}')`

  try {
    let result = await connection.query(query)
    return { status: 200 }
  } catch (error) {
    if (error.code == 'ER_DUP_ENTRY')
      return { status: 401 }
  }

  return { status: 500 }
  
}

module.exports = addUser
