const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql')

const getUsers = require('./controller/getUsers')
const UserType = require('./model/UserType')

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => getUsers()
    }
  }
})

module.exports = RootQuery