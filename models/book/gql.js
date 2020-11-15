const { objectType, stringArg } = require('@nexus/schema')
const { UserInputError } = require('apollo-server')

const { fetchBook, fetchBooks, addBook } = require('./dal.js')

const Book = objectType({
    name: 'Book',
    definition(t){
        t.string('title')
        t.string('author')
        t.string('isbn')
    }
})

const defineQueries = t => {
    t.field('getBook', {
        type: Book,
        args: {
            isbn: stringArg()
        },
        resolve: async (book, {isbn}) => {
            let res = await fetchBook(isbn)
            console.log(res)
            return res
        }
    })

    t.list.field('allBooks', {
        type: Book,
        resolve: async () => {
            const books = await fetchBooks()
            return books.rows
        }
    })
}

const defineMutations = t => {
    t.field('addBook', {
        type: Book,
        args: {
            title: stringArg(),
            author: stringArg(),
            isbn: stringArg()
        },
        resolve: async (book, {title, author, isbn}) => {
            await addBook({title, author, isbn})
                .then(() => ({title, author, isbn}))
                .catch(e => {throw new UserInputError(e)})
        }
    })
}

const types = [Book]

module.exports = { 
    types, 
    defineQueries,
    defineMutations
}