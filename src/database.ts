import { knex as setupeKnex } from "knex"

export const config = {
    client: 'sqlite',
    connection: {
        filename: './tmp/app.db',
    },
    useNullAsDefault: true,
}

export const knex = setupeKnex(config)