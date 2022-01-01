const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const getUsers = require('../controller/getUsers')
const UserType = require('./UserType')

const AuthType = new GraphQLObjectType({
  name: "AuthType",
  description: "Represents the AuthType in the system.",
  fields: () => ({
    status: { type: GraphQLInt },
    user: {
      type: UserType,
      resolve: ({ user }) => getUsers(0, user)
    }
  })
})

module.exports = AuthType
