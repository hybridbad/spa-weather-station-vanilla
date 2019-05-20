import { api } from '../../services/api.mjs';
// import Utils from '../../services/helper-methods.mjs';

let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Head line page </h3>
    </section>
    `;
    api.getData();
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
    // let article = Utils.parseRequestURL();
    // api.createSummary(article.id);
  }
};

let Error404 = {};

export { Home, ShowChart, Error404 };
