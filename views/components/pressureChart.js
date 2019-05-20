let pressure = `
    var ctx = document.getElementById('press').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: id,
        datasets: [
          {
            label: 'pressure',
            data: pressData
          },
        ]
      },

    });`;

export default pressure;
