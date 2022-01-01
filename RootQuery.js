const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql')

const getUsers = require('./controller/getUsers')
const getPosts = require('./controller/getPosts')
const getComments = require('./controller/getComments')

const UserType = require('./model/UserType')
const PostType = require('./model/PostType')
const CommentType = require('./model/CommentType')

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        uid: {type: GraphQLInt}
      },
      resolve: (parent, args) => getUsers(parent, args)
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => getPosts(parent, args)
    },
    comments: {
      type: new GraphQLList(CommentType),
      args: {
        pid: {type: GraphQLInt}
      },
      resolve: (parent, args) => getComments(parent, args)
    },
  }
})

module.exports = RootQuery