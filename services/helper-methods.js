import weatherTableData from '../src/weatherTableData.js';
import weatherDataObject from '../src/weatherDataObject.js';
import DateConverter from '../services/date-processor.js';
import externalWeatherDataObject from '../src/externalWeatherDataObject.js';
import externalWeatherTableData from '../src/externalWeatherTableData.js';
import all from '../views/components/allCharts.js';
import ChartGenerator from '../services/chart-generator.js';

let darkskyList = new externalWeatherTableData();
let list;

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
  
// create darksky object
  createExternalWeatherObjects: response => {
    let darkskyData = response;
  
    for (let i = 0; i < darkskyData.hourly.data.length; i++) {
      const element = darkskyData.hourly.data[i];
  
      let externalWeatherData = new externalWeatherDataObject(
        element.time,
        element.summary,
        element.precipProbability,
        element.precipIntensity
      );
      darkskyList.addData(externalWeatherData);
    }
    return darkskyList;
  },

  //Create weather objects
  createWeatherObjects: response => {
    let apiData = response;
    list = new weatherTableData();

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
    if (list.length == 0) {
      return;
    }
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
    const initialIndex = Math.max(list.length - 10, 0);

    for (let i = list.length - 1; i > initialIndex; i--) {
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

    let time = DateConverter.processDate(list[length - 1].date);

    document.getElementById('temperaturePoint').innerHTML = temperature;
    document.getElementById('humidityPoint').innerHTML = humidity;
    document.getElementById('pressurePoint').innerHTML = pressure;
    document.getElementById('datePoint').innerHTML = time;
  },

  // Creates a chart based on the available data
  createWeatherCharts: data => {
    let temperatureData = data.getTemperatureData();
    let humidityData = data.getHumidityData();
    let pressureData = data.getPressureData();
    let dates = data.getDatesData();

    ChartGenerator.createOneChart({
      name: 'temperature',
      id: 'rpi-temperature-graph',
      yAxisData: temperatureData,
      xAxisData: dates
    });

    ChartGenerator.createOneChart({
      name: 'humidity',
      id: 'rpi-humidity-graph',
      yAxisData: humidityData,
      xAxisData: dates
    });

    ChartGenerator.createOneChart({
      name: 'pressure',
      id: 'rpi-pressure-graph',
      yAxisData: pressureData,
      xAxisData: dates
    });
  },

  createDarkskyWeatherCharts: data => {
    let precipProbabilityData = data.getPrecipProbabilityData();
    let precipIntensityData = data.getPrecipIntensityData();
    let dates = data.getTimeData();

    ChartGenerator.createOneChart({
      name: 'precipitation probability',
      id: 'dark-sky-graph',
      yAxisData: precipProbabilityData,
      xAxisData: dates
    });

    // ChartGenerator.createOneChart({
    //   name: 'precipitation intensity',
    //   id: 'rpi-humidity-graph',
    //   yAxisData: precipIntensityData,
    //   xAxisData: dates
    // });

  },

  updateWeatherCharts: data => {
    ChartGenerator.updateCharts(data)
  }
};

export default Utils;
