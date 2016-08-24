import koa from 'koa';
import Router from 'koa-router';
import axios from 'axios';

const app = koa();
const router = new Router();

// TODO: Move this somewhere else
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'; //?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY'
const API_KEY = ''; // Get your own

router.get('/', function *(next) {
  this.body = 'Stuff';
});

// Put me in another file if you want
const ExampleController = {
  get: function *(next) {
    const address = ['1600', 'Amphitheatre Parkway', 'Mountain View', 'CA'].join('+');
    const response = yield axios.get(`${API_URL}?address=${address}&key=${API_KEY}`);
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    this.body = `${lat} & ${lng}`;
  }
}

router.get('/api/example', ExampleController.get);

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
