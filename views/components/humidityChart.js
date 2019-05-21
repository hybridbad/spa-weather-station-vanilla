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

// let maxHum = humData.reduce((a, b) => {
//   return parseInt(Math.max(a, b));
// });

// let minHum = humData.reduce((a, b) => {
//   return parseInt(Math.min(a, b));
// });

export default humidity;
