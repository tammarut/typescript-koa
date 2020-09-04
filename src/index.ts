import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'

const app = new Koa()
const router = new Router()

// Hello world
router.get('/', async (ctx, next) => {
  ctx.body = {msg: 'foo bar'}

  await next()
})

// Middlewares
app.use(json())
app.use(logger())

// Routes
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.log(`Server listening on port: 8080`)
})
