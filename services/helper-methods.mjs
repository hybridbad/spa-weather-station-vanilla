import weatherTableData from '../src/weatherTableData.js';
import weatherDataObject from '../src/weatherDataObject.js';

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

  outputWeatherObjectsTable: list => {
    let html = '';
    html += `<table>`;
    html += `<tr>`;
    html += `<th>Temperature</th>`;
    html += `<th>Pressure</th>`;
    html += `<th>Humidity</th>`;
    html += `</tr>`;
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      html += `<tr>`;
      html += `<td>${element.temperature}</td>`;
      html += `<td>${element.pressure}</td>`;
      html += `<td>${element.humidity}</td>`;
      html += `</tr>`;
    }
    html += `</table>`;
    document.getElementById('weather-data').innerHTML = html;
  },

  createWeatherChart: response => {
    let apiData = response;
    let tempData = [];
    let humData = [];
    let pressData = [];
    let id = [];

    apiData.forEach(res => {
      tempData.push(res.temperature);
      humData.push(parseFloat(res.humidity));
      pressData.push(res.pressure);
      id.push(new Date(res.date).toLocaleString());
    });

    let maxHum = humData.reduce((a, b) => {
      return parseInt(Math.max(a, b));
    });

    let minHum = humData.reduce((a, b) => {
      return parseInt(Math.min(a, b));
    });
    // let html = `${apiData}`;
    let all = `
    var ctx = document.getElementById('all').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: id.slice(1, 100),
        datasets: [
          {
            label: 'temperature',
            borderColor: 'rgba(250, 120, 80, 0.1)',
            backgroundColor: 'rgba(250, 120, 80, 0.1)',
            data: tempData.slice(1,100),
            yAxisID:'A'
          },{
            label: 'pressure',
            borderColor: 'rgba(123, 12, 80, 0.1)',
            backgroundColor: 'rgba(123, 12, 80, 0.1)',
            data: pressData.slice(1, 100),
            yAxisID:'B'
          },
          {
            label: 'humidity',
            borderColor: 'rgba(50, 59, 80, 0.1)',
            backgroundColor: 'rgba(50, 59, 80, 0.1)',
            data: humData.slice(1, 100),
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            id:'A',
            type:'linear',
            position:'left',
            
          }, {
            id: 'B',
            type:'linear',
            position:'right',
            ticks:{
              max:1013,
              min:1011
            }
          }]
        }
      }
    });`;

    let temperature = `
    var ctx = document.getElementById('temp').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: id,
        datasets: [
          {
            label: 'temperature',
            data: tempData
          },
        ]
      },

    });`;

    let humidity = `
    var ctx = document.getElementById('hum').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: id,
        datasets: [
          {
            label: 'humidity',
            data: humData
          },
        ]
      },

    });`;

    let pressure = `
    var ctx = document.getElementById('press').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: id,
        datasets: [
          {
            label: 'humidity',
            data: pressData
          },
        ]
      },

    });`;
    // document.getElementById('weather-data').innerHTML = html;
    document.getElementById('all').innerHTML = eval(all);
    document.getElementById('temp').innerHTML = eval(temperature);
    document.getElementById('hum').innerHTML = eval(humidity);
    document.getElementById('press').innerHTML = eval(pressure);
  }
};

export default Utils;
