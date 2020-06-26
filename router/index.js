const Router = require('koa-router');
const router = new Router();
const account = require('../app/login')

router.get('/', async (ctx)=> {
    await ctx.render('index')
})

module.exports = router;