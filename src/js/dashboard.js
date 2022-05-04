// let xRand = Math.floor((Math.random()*100)+1);
// let a=[];
// for(var i=0;i<4;i++){

// }

let btnAdd = document.querySelector('.form__item');
let tbody = document.querySelector('tbody');

let nameInput = document.querySelector('#form__item-name');
let ipInput = document.querySelector('#form__item-ip');
let powerInput = document.querySelector('#form__item-power');

function validate(){
    
}

btnAdd.addEventListener("submit", (e)=>{
    e.preventDefault(); 


    let name = nameInput.value;
    let ip = ipInput.value;
    let power = powerInput.value;
    let template = `
        <tr class="table__row">
            <td class="table__item text-left">${name}</td>
            <td class="table__item">00:1B:44:3A:B7</td>
            <td class="table__item">${ip}</td>
            <td class="table__item">2021-05-31</td>
            <td class="table__item">${power}</td>
        </tr>
    `;
    tbody.innerHTML += template;
    console.log(tbody);
});


// Chartjs
var xValues = ["TV", "Washer", "Refrigerator", "Selling Fan"];
var yValues = [50, 60, 80, 100];
var barColors = [
    "#FF5F81",
    "#FF9F40",
    "#FFCD56",
    "#4BC0C0"
];

new Chart("myChart", {
    type: "doughnut",
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Power Consumption'
            }
        },
    }
});

///////
