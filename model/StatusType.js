const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const StatusType = new GraphQLObjectType({
  name: "StatusType",
  description: "Represents the StatusType in the system.",
  fields: () => ({
    status: { type: GraphQLInt }
  })
})

module.exports = StatusType
