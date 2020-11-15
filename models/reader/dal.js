const { Client } = require('pg')

// for local development, requires a .env file in root directory
if (!process.env.PGUSER) require('dotenv').config()

// for expediency's sake, written as SQL queries, but can be abstracted with an ORM or Prisma
const fetchReader = async (id) => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query({
        text: 'SELECT * FROM "Reader" WHERE id = $1;',
        values: [id]
    })

    client.end()
    return res.rows[0]
}

const fetchReaders = async () => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query('SELECT * FROM "Reader";')

    client.end()
    return res
}

const addReader = async (reader) => {
    const client = await new Client()
    await client.connect()
        .then(() => console.log('connected'))
        .catch(e => console.error('connection error', e.stack))

    const res = await client.query({
        text: `INSERT INTO "Reader"(name, phone, address) VALUES($1, $2, $3);`,
        values: [reader.name, reader.phone, reader.address]
    })

    client.end()
    return res
}

module.exports = { fetchReader, fetchReaders, addReader }