const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const getUsers = require('../controller/getUsers')
const UserType = require('./UserType')

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  description: "Represents the CommentType in the system.",
  fields: () => ({
    cid: { type: GraphQLInt },
    content: { type: GraphQLString },
    uid: { type: GraphQLInt },
    pid: { type: GraphQLInt },
    author: {
      type: UserType,
      resolve: comment => getUsers(0, comment)
    }
  })
})

module.exports = CommentType