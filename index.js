const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const schema = require('./models/schema.js')

const app = express();
const server = new ApolloServer({schema})
server.applyMiddleware({ app, path: '/graphql' });

// The `listen` method launches a web server.
app.listen({ port: process.env.PORT || 4000 },() => {
  console.log(`🚀  Server ready at ${process.env.PORT || 4000}`)
});