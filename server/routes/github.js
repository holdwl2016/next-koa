const Router = require('koa-router')

const github = new Router()

github.prefix('/github')

github.get('/*', async ctx=>{

})

module.exports = github