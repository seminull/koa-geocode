import koa from 'koa';
import Router from 'koa-router';

import GeocodeController from './controllers/GeocodeController';

const app = koa();
const router = new Router();

router.get('/', function *(next) {
  this.body = 'koa-gecode';
});

router.get('/api/geocode', GeocodeController.geocode);

app.use(router.routes()).use(router.allowedMethods());
app.listen(3010);
