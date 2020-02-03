const options = process.env.NODE_ENV === 'production' ?
    {
        client: 'pg',
        connection: process.env.DATABASE_URL
    } : {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'todo_db'
        }
    }

const knex = require('knex')(options)

module.exports = knex;
