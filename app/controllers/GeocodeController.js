import axios from 'axios';
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = ''; // Get your own

const GeocodeController = {
  geocode: async(ctx, next) => {
    const address = ['1600', 'Amphitheatre Parkway', 'Mountain View', 'CA'].join('+');
    const response = await axios.get(`${API_URL}?address=${address}&key=${API_KEY}`);
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    console.log(ctx.request.body);
    ctx.body = `${lat} & ${lng}`;
  }
}

module.exports = GeocodeController;
