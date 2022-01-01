const express = require("express");
const path = require('path');
const cors = require('cors');
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { createConnection } = require('./dbConnection');
const RootMutation = require("./RootMutation");

createConnection().then(_ => {
  
  const app = express();
  const PORT = 5000;

  app.use(cors())
  
  const RootQuery = require('./RootQuery.js')
  
  const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
  });

  
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
  
  app.use('/', express.static(path.resolve(__dirname, 'view')))

  app.listen(PORT, console.log(`Server listening on ${PORT}`));

})
