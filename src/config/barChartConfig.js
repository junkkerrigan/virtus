export default {
  look: {
    backgroundColor: '#505464',
    borderWidth: 0,
    hoverBackgroundColor: '#2196f3'
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          color: '#505464'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontFamily: 'Montserrat',
          fontSize: 14,
          fontWeight: 400,
          color: '#9ca1b2'
        }
      }]
    },
    maintainAspectRatio: false
  }
};
