const { objectType, stringArg, intArg } = require('@nexus/schema')
const { UserInputError } = require('apollo-server')

const { fetchReader, fetchReaders, addReader } = require('./dal.js')

const Reader = objectType({
    name: 'Reader',
    definition(t){
        t.int('id')
        t.string('name')
        t.string('phone')
        t.string('address')
    }
})

const defineQueries = t => {
    t.field('getReader', {
        type: Reader,
        args: {
            id: intArg()
        },
        resolve: async (reader, {id}) => {
            let res = await fetchReader(id)
            console.log(res)
            return res
        }
    })

    t.list.field('allReaders', {
        type: Reader,
        resolve: async () => {
            const readers = await fetchReaders()
            return readers.rows
        }
    })
}

const defineMutations = t => {
    t.field('addReader', {
        type: Reader,
        args: {
            name: stringArg(),
            phone: stringArg(),
            address: stringArg()
        },
        resolve: async (reader, {name, phone, address}) => {
            await addReader({name, phone, address})
                .then(() => ({name, phone, address}))
                .catch(e => {throw new UserInputError(e)})
        }
    })
}

const types = [Reader]

module.exports = { 
    types, 
    defineQueries,
    defineMutations
}