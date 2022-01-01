const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const PostType = new GraphQLObjectType({
  name: "PostType",
  description: "Represents the post in the system.",
  fields: {
    pid: { type: GraphQLInt },
    location: { type: GraphQLString },
    content: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    uid: { type: GraphQLInt },
  }
})

module.exports = PostType