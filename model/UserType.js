const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: "UserType",
  description: "Represents the users in the system.",
  fields: {
    id: { type: GraphQLInt },
    display_name: { type: GraphQLString },
    avatar: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
    dob: { type: GraphQLString },
    created_on: { type: GraphQLString },
    level: { type: GraphQLInt },
    online: { type: GraphQLString },
  }
})

module.exports = UserType