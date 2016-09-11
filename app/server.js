import Koa from 'koa';
import Router from 'koa-router';
import cors from 'kcors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import GeocodeController from './controllers/GeocodeController';

const app = new Koa();
const router = new Router();

router.get('/', async(ctx, next) => {
  ctx.body = 'koa-geocode';
});

router.post('/api/geocode', GeocodeController.geocode);

app.use(cors());
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3010);
