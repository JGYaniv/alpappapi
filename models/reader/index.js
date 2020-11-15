const dal = require('./dal')
const gql = require('./gql')

const Reader = { ...dal, ...gql }
module.exports = Reader