const Koa = require('koa');
const respond = require('koa-respond');
const logger = require('koa-logger');

const { routes } = require('../routes');

require('../sequelize_example/dbConnection');

const app = new Koa();

app.use(respond());
app.use(logger());

routes.forEach((route) => app.use(route));

module.exports = app;
