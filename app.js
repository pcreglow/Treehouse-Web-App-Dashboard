// Traffic - Chart.js //

var ctx = document.getElementById("traffic").getContext('2d');
var traffic = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            lineTension: 0,
            label: '# of site visitors (millions)',
            data: [2.5, 2.9, 1.7, 1.5, 1.9, 1.4, 1.1],
            backgroundColor: [
                'rgba(221, 222, 238, 0.3)'

            ],
            borderColor: [
                'rgb(116, 120, 186)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
