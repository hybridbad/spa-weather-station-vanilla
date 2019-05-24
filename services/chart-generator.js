
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
            borderColor: 'rgba(203, 2, 234, 0.3)',
            backgroundColor: 'rgba(242, 160, 255, 0.3)',
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
            distribution: 'linear',
            time: {
              displayFormats: {
                minute: "dd H:mm",
                hour: "ddd H:mm"
              }
            }
          }],
        }
      }
    });

    this.charts[options.name] = chart;
  },

  createEverythingGraph(options) {
    const elementId = options.id;
    const xAxisData = options.xAxisData;
    const temperatureData = options.temperatureData;
    const humidityData = options.humidityData;
    const pressureData = options.pressureData;


    const ctx = document.getElementById(elementId)
    ctx.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [
          {
            label: 'temperature',
            borderColor: 'rgba(250, 120, 80, 0.1)',
            backgroundColor: 'rgba(250, 120, 80, 0.1)',
            data: temperatureData,
            yAxisID:'A',
            pointRadius: 0
          },
          {
            label: 'humidity',
            borderColor: 'rgba(50, 59, 80, 0.1)',
            backgroundColor: 'rgba(50, 59, 80, 0.1)',
            data: humidityData,
            yAxisID:'A',
            pointRadius: 0
          },
          {
            label: 'pressure',
            borderColor: 'rgba(123, 12, 80, 0.1)',
            backgroundColor: 'rgba(123, 12, 80, 0.1)',
            data: pressureData,
            yAxisID:'B',
            pointRadius: 0
          },
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            time: {
              displayFormats: {
                minute: "dd H:mm",
                hour: "ddd H:mm"
              }
            }
          }],
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left'
          }, {
            id:  'B',
            type: 'linear',
            position: 'right'
          }]
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

    let chart = that.charts.everything;
    chart.config.data.labels = filteredData.dates;
    chart.config.data.datasets[0].data = filteredData.temperature;
    chart.config.data.datasets[1].data = filteredData.humidity;
    chart.config.data.datasets[2].data = filteredData.pressure;
    chart.update();

  },

  createDarkskyChart: function(options) {
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
            data: yAxisData,
            borderColor: 'rgba(4, 50, 124, 0.3)',
            backgroundColor: 'rgba(53, 121, 232, 0.3)',
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
            distribution: 'linear',
            time: {
              displayFormats: {
                hour: "ddd hA"
              }
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMin: 0,
              suggestedMax: 1,
              stepSize: 0.2,
              callback: function(tick) {
                return (tick * 100).toString() + '%';
              }      
            }
          }]
        }
      }
    });
  }

}

export default ChartGenerator;
