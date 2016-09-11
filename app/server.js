import Koa from 'koa';
import Router from 'koa-router';

import GeocodeController from './controllers/GeocodeController';

const app = new Koa();
const router = new Router();

router.get('/', async(ctx, next) => {
  ctx.body = 'koa-geocode';
});

router.get('/api/geocode', GeocodeController.geocode);

app.use(router.routes()).use(router.allowedMethods());
app.listen(3010);
