import fastify from "fastify";
import cookie from '@fastify/cookie'

import { transactionsRoutes } from "./routes/transactions";

const app = fastify();

app.register(cookie)

// app.addHook('preHandler', async (request, reply) => {
//     console.log(`[${request.method}] ${request.url}`)
//     //eu sou um middlaware global!
// })

app.register(transactionsRoutes, {
    prefix: 'transactions'
})

export { app }