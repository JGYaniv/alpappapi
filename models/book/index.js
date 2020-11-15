const dal = require('./dal')
const gql = require('./gql')

const Book = { ...dal, ...gql }
module.exports = Book