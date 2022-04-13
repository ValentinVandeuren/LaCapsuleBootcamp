let genderChart = document.getElementById('genderChart');

new Chart(genderChart, {
    type: 'bar',
    data: {
        labels: [ "female", "male" ],
        datasets: [{
            data: [ 12, 19 ]
        }]
    }
});