const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql')

const StatusType = require('./model/StatusType')

const addUser = require('./controller/addUser')
const addPost = require('./controller/addPost')
const addComment = require('./controller/addComment')

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: StatusType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: GraphQLString },
        dob: { type: GraphQLString },
        created_on: { type: GraphQLString },
      },
      resolve: (parent, args) => addUser(parent, args)
    },
    addPost: {
      type: StatusType,
      args: {
        location: { type: GraphQLString },
        content: { type: GraphQLString },
        image: { type: GraphQLString },
        date: { type: GraphQLString },
        uid: { type: GraphQLInt },
      },
      resolve: (p, a) => addPost(p, a)
    },
    addComment: {
      type: StatusType,
      args: {
        content: { type: GraphQLString },
        uid: { type: GraphQLInt },
        pid: { type: GraphQLInt },
      },
      resolve: (p, a) => addComment(p, a)
    },
  })
})

module.exports = RootMutation