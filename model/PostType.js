const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')
const getComments = require('../controller/getComments')
const getUsers = require('../controller/getUsers')
const CommentType = require('./CommentType')
const UserType = require('./UserType')

const PostType = new GraphQLObjectType({
  name: "PostType",
  description: "Represents the post in the system.",
  fields: () => ({
    pid: { type: GraphQLInt },
    location: { type: GraphQLString },
    content: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    uid: { type: GraphQLInt },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: post => getComments(0, post)
    },
    author: {
      type: UserType,
      resolve: (post) => getUsers(0, post)
    }
  })
})

module.exports = PostType