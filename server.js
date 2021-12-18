const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { createConnection } = require('./dbConnection')

createConnection()

const app = express();
const PORT = 5000;

const RootQuery = require('./RootQuery.js')

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, console.log(`Server listening on ${PORT}`));
