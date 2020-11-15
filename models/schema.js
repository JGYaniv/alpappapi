const { queryType, makeSchema, mutationType } = require('@nexus/schema')

const Book = require('./book/index.js')
const Reader = require('./reader/index.js')

const Query = queryType({
  definition(t) {
    Book.defineQueries(t)
    Reader.defineQueries(t)
  }
})

const Mutation = mutationType({
  definition(t) {
    Book.defineMutations(t)
    Reader.defineMutations(t)
  }
})

const schema = makeSchema({
  types: [
    ...Book.types,
    ...Reader.types,
    Query,
    Mutation
  ]
})

module.exports = schema