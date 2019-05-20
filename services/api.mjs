import Utils from './helper-methods.mjs';
let xhr = new XMLHttpRequest();

let api = {
  getArticles: function() {
    let url = `http://e56e5040.ngrok.io/api/data`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let apiData = JSON.parse(xhr.response);
        console.log(apiData);
        //create list of articles
        let response = Utils.createWeatherObjects(apiData);
        console.log(response);
        //create and insert html of articles into <div id='articles'>
        Utils.outputArticlesHTML(response.list);
      }
    };
  }
};

export { api };
