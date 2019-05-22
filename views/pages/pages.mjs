import { api } from '../../services/api.mjs';

let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Weather Station</h3>
    </section>
    `;

    api.getData();
    api.getDarkSkyData();
    return view;
  }
};

let ShowChart = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Chart </h3>
    </section>
    `;
    api.getWeatherChart();
    return view;
  }
};

let Error404 = {};

export { Home, ShowChart, Error404 };
