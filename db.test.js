const { getConnection } = require('./dbConnection')

async function testQuery() {

  const query = `INSERT INTO users(name, email, password, address, dob, created_on) VALUE('Tanvir Ahmed', 'tanvir.ahm@gmail.com', '12351235', 'Dhaka', '1994-11-14', '2022-01-02')`;

  const conn = await getConnection()

  const result = await conn.query(query)

  return result

}

testQuery().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err.code)
})
