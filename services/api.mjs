import Utils from './helper-methods.mjs';
let xhr = new XMLHttpRequest();

let api = {
  getData: function() {
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
      }
    };
  },

  getWeatherChart: function() {
    let url = `https://quiet-everglades-27917.herokuapp.com/api/data`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let apiData = JSON.parse(xhr.response);
        Utils.createWeatherChart(apiData);
      }
    };
  }
};

export { api };
