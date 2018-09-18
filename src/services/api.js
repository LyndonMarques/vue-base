import { create } from 'apisauce';
import app from '../main';

const api = create({
  baseURL: process.env.BASE_URL
});

api.addRequestTransform(() => {
  if (app !== undefined) {
    app.$Progress.start();
  }
});

api.addResponseTransform(() => {
  if (app !== undefined) {
    app.$Progress.finish();
  }
});

export default api;
