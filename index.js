const Koa = require('koa')
const app = new Koa()

const config = require('./config')
app.use(ctx => {
	ctx.body = 'hello BokerSite'
})
app.listen(config.server.POST,() => {
	console.log(`Server run at http://localhost:${config.server.POST}`)
})