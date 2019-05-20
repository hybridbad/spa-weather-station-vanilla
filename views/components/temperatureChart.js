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
    }
  })
  ;`;

export default temperature;
