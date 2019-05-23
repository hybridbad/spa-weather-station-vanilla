import Utils from './helper-methods.js';

let api = {
  getData: function() {
    let xhr = new XMLHttpRequest();
    let url = `https://quiet-everglades-27917.herokuapp.com/api/data`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let apiData = JSON.parse(xhr.response);
        let response = Utils.createWeatherObjects(apiData);

        Utils.outputWeatherObjectsTable(response.list);
        Utils.updateWeatherPointsDashboard(response.list);
        Utils.createWeatherCharts(response);
      }
    };
  },

  getDarkSkyData: function() {
    let xhr = new XMLHttpRequest();
    let corsUnblock = 'https://cors-anywhere.herokuapp.com/'
    let url = 'https://api.darksky.net/forecast/a22ed4ddcc0df574eed15d7d838dde0a/51.5173735,-0.0731095';
    xhr.open('GET', corsUnblock + url, true);
    xhr.send();
    
    xhr.onload = function() {
      let darkskyData = JSON.parse(xhr.response)
      let response = Utils.createExternalWeatherObjects(darkskyData);
      Utils.createDarkskyWeatherCharts(response);
    }
    
  },

  getDataByDates: function (initial, final) {
    let xhr = new XMLHttpRequest();
    let initDate = initial.toISOString()
    let finalDate = final.toISOString()
    let url = `https://quiet-everglades-27917.herokuapp.com/api/data`;
    let query = `?initial_datetime=${initDate}&final_datetime=${finalDate}`;
 
    xhr.open('GET', url + query, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let apiData = JSON.parse(xhr.response);
        let response = Utils.createWeatherObjects(apiData);
 
        Utils.outputWeatherObjectsTable(response.list);
        Utils.updateWeatherCharts(response);
      }
    };
  }
};

export { api };
