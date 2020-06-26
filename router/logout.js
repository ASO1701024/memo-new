const Router = require('koa-router');
const router = new Router();

router.get('/logout', async (ctx, next) => {
    ctx.session = null;
    ctx.redirect('/');
})

module.exports = router;