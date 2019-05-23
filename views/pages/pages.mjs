import { api } from '../../services/api.mjs';

let Home = {
  render: function() {
    // let view = `<section class = 'section'>
    // <h3> Weather Station</h3>
    // </section>
    // `;

    // api.getData();
    api.getDarkSkyData();
    api.getData();
    // return view;
  }
};

let Error404 = {
  render: function() {
    document.getElementById('main').innerHTML = "404 sucka";
  }
};

export { Home, Error404 };
