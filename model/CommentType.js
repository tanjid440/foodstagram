const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  description: "Represents the CommentType in the system.",
  fields: {
    cid: { type: GraphQLInt },
    content: { type: GraphQLString },
    uid: { type: GraphQLInt },
    pid: { type: GraphQLInt },
  }
})

module.exports = CommentType