const app = require('koa')();
const router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'Stuff';
});

// Put me in another file if you want
const ExampleController  = {
  get: function *(next) {
    this.body = 'Example Get';
  }
}

router.get('/api/example', ExampleController.get);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
