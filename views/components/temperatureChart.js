let temperature = `
  var ctx = document.getElementById('temp').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: id,
      datasets: [
        {
          label: 'temperature',
          borderColor: 'rgba(120, 120, 80, 0.1)',
            backgroundColor: 'rgba(8, 221, 47, 0.3)',
          data: tempData
        },
      ]
    }
  })
  ;`;

export default temperature;
