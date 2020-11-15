const { Client } = require('pg')

// for local development, requires a .env file in root directory
if (!process.env.PGUSER) require('dotenv').config()

// for expediency's sake, written as SQL queries, but can be abstracted with an ORM or Prisma
const fetchBook = async (isbn) => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query({
        text: 'SELECT * FROM "Book" WHERE isbn = $1;',
        values: [isbn]
    })

    client.end()
    return res.rows[0]
}

const fetchBooks = async () => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query('SELECT * FROM "Book";')

    client.end()
    return res
}

const addBook = async (book) => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query({
        text: `INSERT INTO "Book"(title, author, isbn) VALUES($1, $2, $3);`,
        values: [book.title, book.author, book.isbn]
    })

    client.end()
    return res
}

module.exports = { fetchBook, fetchBooks, addBook }