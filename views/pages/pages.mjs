import { api } from '../../services/api.mjs';
// import Utils from '../../services/helper-methods.mjs';

let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h3> Head line page </h3>
    </section>
    `;

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
      var d = new Date();
      document.getElementById('demo').innerHTML = d.toLocaleTimeString();
    }

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
  }
};

let Error404 = {};

export { Home, ShowChart, Error404 };
