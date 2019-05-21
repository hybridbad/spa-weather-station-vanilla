let pressure = `
    var ctx = document.getElementById('press').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: id,
        datasets: [
          {
            label: 'pressure',
            borderColor: 'rgba(120, 120, 80, 0.1)',
            backgroundColor: 'rgba(17, 146, 227, 0.3)',
            data: pressData
          },
        ]
      },

    });`;

export default pressure;
