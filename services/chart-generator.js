
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

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [
          {
            label: 'temperature',
            borderColor: 'rgba(250, 120, 80, 0.1)',
            backgroundColor: 'rgba(250, 120, 80, 0.1)',
            data: temperatureData,
            yAxisID:'A'
          },{
            label: 'pressure',
            borderColor: 'rgba(123, 12, 80, 0.1)',
            backgroundColor: 'rgba(123, 12, 80, 0.1)',
            data: pressureData,
            yAxisID:'B'
          },
          {
            label: 'humidity',
            borderColor: 'rgba(50, 59, 80, 0.1)',
            backgroundColor: 'rgba(50, 59, 80, 0.1)',
            data: humidityData,
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            id:'A',
            type:'linear',
            position:'left',
            
          }, {
            id: 'B',
            type:'linear',
            position:'right',
            ticks:{
              max:1020,
              min:1015
            }
          }]
        }
      }
    });
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
  },

  createDarkskyChart: function(options) {
    const elementId = options.id;
    const xAxisData = options.xAxisData;
    const yAxisData = options.yAxisData;

    const ctx = document.getElementById(elementId);
    ctx.getContext('2d');
    console.log('whut');

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
