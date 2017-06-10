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

// Daily Traffic - Chart.js //

var ctx = document.getElementById("daily-traffic").getContext('2d');
var dailyTraffic = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
        datasets: [{
            label: '# of site visitors (millions)',
            data: [2.5, 2.9, 1.7, 1.5, 1.9, 1.4, 1.1],
            backgroundColor: [
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)',
                'rgba(116, 120, 186, 0.6)'
            ],
            borderColor: [
                'rgb(116, 120, 186)',
                'rgb(116, 120, 186)',
                'rgb(116, 120, 186)',
                'rgb(116, 120, 186)',
                'rgb(116, 120, 186)',
                'rgb(116, 120, 186)',
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

// Mobile Users - Chart.js //

var ctx = document.getElementById("mobile-users").getContext('2d');
var mobileUsers = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '',
            data: [20, 15, 65],
            backgroundColor: [
                'rgba(129, 176, 189, 0.6)',
                'rgba(145, 198, 148, 0.6)',
                'rgba(116, 120, 186, 0.6)'
            ],
            borderColor: [
                'rgb(129, 176, 189)',
                'rgb(145, 198, 148)',
                'rgb(116, 120, 186)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        position: 'right'
      }
    }
});
