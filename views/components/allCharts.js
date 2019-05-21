let all = `
var ctx = document.getElementById('all').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: id.slice(1, 100),
    datasets: [
      {
        label: 'temperature',
        borderColor: 'rgba(250, 120, 80, 0.1)',
        backgroundColor: 'rgba(250, 120, 80, 0.1)',
        data: tempData,
        yAxisID:'A'
      },{
        label: 'pressure',
        borderColor: 'rgba(123, 12, 80, 0.1)',
        backgroundColor: 'rgba(123, 12, 80, 0.1)',
        data: pressData,
        yAxisID:'B'
      },
      {
        label: 'humidity',
        borderColor: 'rgba(50, 59, 80, 0.1)',
        backgroundColor: 'rgba(50, 59, 80, 0.1)',
        data: humData,
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
});`;

export default all;
