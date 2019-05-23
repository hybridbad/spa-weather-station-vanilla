/* eslint-disable no-console */
// import Utils from './helper-methods.js';
let xhr = new XMLHttpRequest();

(function(exports) {
  function darksky(){
  }
  darksky.prototype = {
    requestData: function(){
      let corsUnblock = 'https://cors-anywhere.herokuapp.com/'
      let url = 'https://api.darksky.net/forecast/a22ed4ddcc0df574eed15d7d838dde0a/51.5173735,-0.0731095';
      xhr.open('GET', corsUnblock + url, true);
      xhr.send();
      xhr.onload = function() {
        let externalApiData = JSON.parse(xhr.response)
  
        console.log(externalApiData.hourly.data[0])
      }
    }
  }
  exports.darksky = darksky
})(this)
