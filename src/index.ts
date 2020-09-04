import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

interface Request {
  name: string
}

const app = new Koa()
const router = new Router()

// Hello world
router.post('/', async (ctx, next) => {
  const data = <Request>ctx.request.body
  ctx.body = {msg: 'foo bar', name: data.name}

  await next()
})

// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser())

// Routes
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.log(`Server listening on port: 8080`)
})
