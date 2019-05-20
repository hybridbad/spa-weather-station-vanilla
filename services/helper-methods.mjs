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
    let id = [];
    apiData.forEach(res => {
      tempData.push(res.temperature);
      id.push(res._id);
    });
    // let html = `${apiData}`;
    let test = `
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: id,
        datasets: [
          {
            label: '# of Votes',
            data: tempData
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });`;

    // document.getElementById('weather-data').innerHTML = html;
    document.getElementById('weather-data').innerHTML = eval(test);
  }
};

export default Utils;
