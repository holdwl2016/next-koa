const Koa = require('koa')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handler = app.getRequestHandler()

const github = require('./server/routes/github') // github相关的请求

app.prepare().then(()=>{
  const server = new Koa()

  server.use(github.routes()).use(github.allowedMethods())
  server.use(async (ctx, next)=>{
    await handler(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000,()=>{
    console.log('server on 3000')
  })
})





