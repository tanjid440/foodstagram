const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql')

const getUsers = require('./controller/getUsers')
const getPosts = require('./controller/getPosts')
const getComments = require('./controller/getComments')
const getPostByUser = require('./controller/getPostByUser')
const getPostById = require('./controller/getPostById')
const authUser = require('./controller/authUser')

const UserType = require('./model/UserType')
const PostType = require('./model/PostType')
const CommentType = require('./model/CommentType')
const AuthType = require('./model/AuthType')

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        uid: {type: GraphQLInt}
      },
      resolve: (parent, args) => getUsers(parent, args)
    },
    authUser: {
      type: AuthType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (parent, args) => authUser(parent, args)
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => getPosts(parent, args)
    },
    postsOfUser: {
      type: new GraphQLList(PostType),
      args: {
        uid: { type: GraphQLInt }
      },
      resolve: (parent, args) => getPostByUser(parent, args)
    },
    post: {
      type: PostType,
      args: {
        pid: { type: GraphQLInt }
      },
      resolve: (parent, args) => getPostById(parent, args)
    },
    comments: {
      type: new GraphQLList(CommentType),
      args: {
        pid: {type: GraphQLInt}
      },
      resolve: (parent, args) => getComments(parent, args)
    },
  })
})

module.exports = RootQuery