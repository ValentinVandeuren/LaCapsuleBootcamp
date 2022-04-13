let genderChart = document.getElementById('genderChart');
let doughnutChart = document.getElementById('doughnutChart');
let pieChart = document.getElementById('pieChart');
let lineChart = document.getElementById('lineChart');

let male = genderChart.dataset.male;
let female = genderChart.dataset.female;
let read = doughnutChart.dataset.mr;
let notRead = doughnutChart.dataset.mnr;
let shipment = pieChart.dataset.shipment1;
let notShipment = pieChart.dataset.shipment2;
let CA = JSON.parse(lineChart.dataset.ca);
let userCountByMonthLabels = [];
let userCountByMonthDateResult = [];

new Chart(genderChart, {
    type: 'bar',
    data: {
        labels: [ "female", "male" ],
        datasets: [{
            data: [ female, male ],
            backgroundColor: [
                '#1abc9c',
                '#e74c3c',
            ],
            borderColor: [
                '#16a085',
                '#c0392b',
            ],
            borderWidth: 2,
        }]
    }
});

new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [ "lu", "non lu" ],
        datasets: [{
            data: [ 1, 2 ],
            backgroundColor: [
                '#34495e',
                '#95a5a6',
            ],
            borderColor: [
                '#2c3e50',
                '#7f8c8d',
            ],
            borderWidth: 2,
        }]
    }
});
	
new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: [ "expédié", "non expédié" ],
        datasets: [{
            data: [ shipment, notShipment ],
            backgroundColor: [
                '#2ecc71',
                '#e67e22',
            ],
            borderColor: [
                '#27ae60',
                '#d35400',
            ],
            borderWidth: 2,
        }]
    }
});

for(let i=0; i<CA.length; i++){
    let date = new Date((CA[i]._id.year), (CA[i]._id.month -1), 1);
    let month = date.toLocaleString('default', {month: 'long'});

    userCountByMonthLabels.push(month);
    userCountByMonthDateResult.push(CA[i].total)
}

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: userCountByMonthLabels,
        datasets: [{
            data: userCountByMonthDateResult,
            lineTension: 0.3,
            backgroundColor: '#2ecc71',
            fill: {
                target: 'origin',
                above: '#066163'
            }
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Coucou Youtube'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});