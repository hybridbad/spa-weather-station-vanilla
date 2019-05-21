import weatherTableData from '../src/weatherTableData.js';
import weatherDataObject from '../src/weatherDataObject.js';
import temperature from '../views/components/temperatureChart.js';
import humidity from '../views/components/humidityChart.js';
import pressure from '../views/components/pressureChart.js';
import all from '../views/components/allCharts.js';

let list = new weatherTableData();

const Utils = {
  //For routing
  parseRequestURL: function() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');
    //create request object to return from this function
    let request = {
      resource: null,
      id: null
    };

    //assign url elements after #
    request.resource = r[0];
    request.id = r[1];
    return request;
  },

  //Create weather objects
  createWeatherObjects: response => {
    let apiData = response;

    for (let i = 0; i < apiData.length; i++) {
      const element = apiData[i];

      let weatherData = new weatherDataObject(
        element.temperature,
        element.pressure,
        element.humidity,
        element.date
      );
      list.addData(weatherData);
    }
    return list;
  },

  // Output table with all Data
  outputWeatherObjectsTable: list => {
    let html = '';
    html += `<table class="table table-striped">`;
    html += `<thead class="thead-inverse">`;
    html += `<tr>`;
    html += `<th>Temperature</th>`;
    html += `<th>Pressure</th>`;
    html += `<th>Humidity</th>`;
    html += `<th>Date</th>`;
    html += `</tr>`;
    html += `</thead>`;
    for (let i = list.length - 1; i > list.length - 12; i--) {
      const element = list[i];
      html += `<tr>`;
      html += `<td>${parseFloat(element.temperature).toFixed(2)}</td>`;
      html += `<td>${parseFloat(element.pressure).toFixed(2)}</td>`;
      html += `<td>${parseFloat(element.humidity).toFixed(2)}</td>`;
      html += `<td>${new Date(element.date).toLocaleString()}</td>`;
      html += `</tr>`;
    }
    html += `</table>`;
    document.getElementById('weather-data').innerHTML = html;
  },

  updateWeatherPointsDashboard: list => {
    let length = list.length;
    let temperature = parseFloat(list[length - 1].temperature).toFixed(2);
    let humidity = parseFloat(list[length - 1].humidity).toFixed(2);
    let pressure = parseFloat(list[length - 1].pressure).toFixed(2);

    //Date
    function addZero(i) {
      //adds a 0 if <10
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }
    let date = new Date(list[length - 1].date);
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());
    let time = hours + ':' + minutes + ':' + seconds;
    //Date

    document.getElementById('temperaturePoint').innerHTML = temperature;
    document.getElementById('humidityPoint').innerHTML = humidity;
    document.getElementById('pressurePoint').innerHTML = pressure;
    document.getElementById('datePoint').innerHTML = time;
  },

  // Creates a chart based on the available data
  createWeatherChart: response => {
    let data = response;
    let tempData = data.getTemperatureData();
    let humData = data.getHumidityData();
    let pressData = data.getPressureData();
    let id = data.getDatesData();

    // document.getElementById('weather-data').innerHTML = html;
    // document.getElementById('all').innerHTML = eval(all);
    document.getElementById('temp').innerHTML = eval(temperature);
    document.getElementById('hum').innerHTML = eval(humidity);
    document.getElementById('press').innerHTML = eval(pressure);
  }
};

export default Utils;
