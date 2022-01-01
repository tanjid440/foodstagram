const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: "UserType",
  description: "Represents the users in the system.",
  fields: () => ({
    uid: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: GraphQLString },
    dob: { type: GraphQLString },
    created_on: { type: GraphQLString },
    token: { type: GraphQLString },
  })
})

module.exports = UserType
