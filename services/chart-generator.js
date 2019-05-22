
const ChartGenerator = {

  charts: {},

  createOneChart: function(options) {
    const elementId = options.id;
    const xAxisData = options.xAxisData;
    const yAxisData = options.yAxisData;

    const ctx = document.getElementById(elementId);
    ctx.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [
          {
            pointRadius: 0,
            data: yAxisData
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear'
          }],
        }
      }
    });

    this.charts[options.name] = chart;
  },

  updateCharts: function(data) {
    const that = this;

    let filteredData = {
      temperature: data.getTemperatureData(),
      humidity: data.getHumidityData(),
      pressure: data.getPressureData(),
      dates: data.getDatesData(),
    };

    ['temperature', 'humidity', 'pressure'].forEach(function(name) {
      let chart = that.charts[name];
      chart.config.data.labels = filteredData.dates;
      chart.config.data.datasets[0].data = filteredData[name];
      chart.update();
    });
  }

}

export default ChartGenerator;
