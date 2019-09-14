const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
      ctx.throw('body parse error', 422)
    }
}));

require("./routes")(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve("./build"));

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })

module.exports = app;