const Router = require('koa-router');
const router = new Router();
const connection = require('../app/db');
const config = require('../config.json');

router.post('/signup', async (ctx, next) => {
    let session = ctx.session;
    app.initializeSession(session);
    let user_id = ctx.request.body['user_id'];
    let password = ctx.request.body['password'];
    sql = 'INSERT INTO user (user_id,password) VALUES (?, ?)';
})

module.exports = router;
