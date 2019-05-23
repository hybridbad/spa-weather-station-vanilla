import { api } from '../../services/api.mjs';

let Home = {
  render: function() {
    api.getDarkSkyData();
    api.getData();
  }
};

let Error404 = {
  render: function() {
    document.getElementById('main').innerHTML = "404 sucka";
  }
};

export { Home, Error404 };
