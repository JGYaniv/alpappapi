# ALPAPPAPI

You can access a public endpoint for development purposes at https://alpappapi.herokuapp.com/graphql

### Tech Stack

- Apollo Server: easy GraphQL implementation
- Apollo Server Express + Express: Apollo express wrapper and the server itself
- @prisma/schema: programatically write GraphQL schemas, allowing for a more modular architecture
- pg: because it's familiar, but we should either add an ORM or switch to Prisma
- dotenv: for accessing the .env file in root directory for local development

### To do:

- replace sql queries with ORM or Prisma
- add model and DB level validaitons
- add libraries, 

### Setup:

- Clone repo (ie `git clone https://github.com/JGYaniv/alpappapi.git`)
- Make sure you have [Postgres](https://www.postgresql.org/download/) installed & running
- open project directory in terminal
- create a database (ie `createdb alpapp`)
- [run the migration](https://www.postgresql.org/docs/9.5/app-psql.html) (ie `psql postgres -d alpapp -f migrations/00001-init.sql`)
- `npm install`
- `npm run start`
- Your endpoint should now be: `https://localhost:4000/graphql`

### Available Queries & Mutations

- getBook(isbn)
- allBooks
- addBook(isbn, title, author)
- getReader(id)
- allReaders
- addReader(name, phone, address)

There's plenty more to add, this is just a starting point as of 11/15/20

This is part of the [ALPapp project](https://github.com/JGYaniv/ALPapp)