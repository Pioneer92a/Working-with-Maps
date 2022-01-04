// this project is being used to learn about maps
// note that in sets, we had to work with two different sets to store month and value
// ... but in maps we can have one map with months as key and month's value as value ofcourse
// maps are faster than objects and are simpler and have various useful functions such as map.has(key) etc.
// WeakMaps are garbage collected in terms of memory, have lesser functions, and can only store objects as keys

// Accessing the objects
var ctx = document.getElementById('monthlySales').getContext('2d');
var pieCtx = document.getElementById('deptSales').getContext('2d');
var yearlyLabel = document.getElementById('yearlyTotal');
var newAmount = document.getElementById('itemAmount');
var newMonth = document.getElementById('monthId');
let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

// Monthly Totals
var yearlyTotal = 0;

const monthlySales = new Map()

// Add Sales
function addSale(){
	monthlySales.set(newMonth.value, parseInt(newAmount.value)) // note that we are using set in maps intead of add in sets
    
    // Update our Labels
    monthlySalesChart.data.labels = Array.from(monthlySales.keys())

    // resetting yearlyTotal and monthlySalesChart's data to 0
    yearlyTotal = 0
    monthlySalesChart.data.datasets.forEach(dataset => {
        dataset.data = []
    });

    for (let amount of monthlySales.values()) {
        yearlyTotal = amount + yearlyTotal
        yearlyLabel.innerHTML = yearlyTotal; // update the yearlyTotal label

        // update the monthlySalesChart's data
        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount)
        })
    }
    monthlySalesChart.update(); //update() needs to be called to render new values
}

function findSale(){
    console.log(monthlySales.get(1)) // you just type in specific key to get the map's value
    console.log(monthlySales.has(1)) // returns true if a map with this key exists
}

function fillValue() {
    console.log(monthlySales.delete(1)) // just like get, you type in specific key to delete the specific map
    console.log(monthlySales)
}

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// // Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })