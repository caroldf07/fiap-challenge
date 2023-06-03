import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { relatorioRoute } from './routes/relatorio'

const app = fastify()

app.register(multipart)

/*Configuração do cors */
/*Sem a especificação de url, ele aceita requisição de qualquer front-end */
app.register(cors, {
  origin: true,
})

app.register(relatorioRoute)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
