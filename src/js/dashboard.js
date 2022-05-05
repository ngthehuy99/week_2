let submitForm = document.querySelector('.form__item');
let tbody = document.querySelector('tbody');

let local = JSON.parse(localStorage.getItem("deviceArray"));

let nameInput = document.querySelector('#form__item-name');
let ipInput = document.querySelector('#form__item-ip');
let powerInput = document.querySelector('#form__item-power');

let menu = document.querySelector('.nav');
let burger = document.querySelector('#burger');
let closeIcon = document.querySelector('.close-icon');
let menuIcon = document.querySelector('.burger-icon');


if(local){
    local.forEach(element => {
        let template = `
        <tr class="table__row">
            <td class="table__item text-left">${element.name}</td>
            <td class="table__item">00:1B:44:3A:B7</td>
            <td class="table__item">${element.ip}</td>
            <td class="table__item">2021-05-31</td>
            <td class="table__item">${element.powerConsumption}</td>
        </tr>
        `;
        tbody.innerHTML += template;
        updateChart();
    });
}else{
    updateChart();
}
const table = document.querySelector(".table__content");
const tableBody = table.getElementsByTagName("tbody")[0];
const tfoot = table.getElementsByTagName("tfoot")[0];

submitForm.addEventListener("submit", (e)=>{
    e.preventDefault(); 
    let name = nameInput.value;
    let ipVal = ipInput.value;
    let power = powerInput.value;

    if(name == ""){
        alert("Khong the de trong ten cua thiet bi");
        return;
    }else if (ipVal == "") {
        alert("Khong the de trong ip");
        return;
    }else if (power == "" && !power.isNaN()) {
        alert("Khong the de trong power consumption");
        return;
    }

    let template = `
        <tr class="table__row">
            <td class="table__item text-left">${name}</td>
            <td class="table__item">00:1B:44:3A:B7</td>
            <td class="table__item">${ipVal}</td>
            <td class="table__item">2021-05-31</td>
            <td class="table__item">${power}</td>
        </tr>
    `;
    tbody.innerHTML += template;
    const tableRows = Array.from(tableBody.querySelectorAll("tr"))
    let totalPower = tableRows.reduce((pre, row) => {
        return (pre += parseInt(row.cells[4].innerHTML));
      }, 0);
      tfoot.querySelector("tr").children[1].innerHTML = totalPower;
    if(local){
        localStorage.setItem(
            "deviceArray",
            JSON.stringify([
              ...local,
              {
                name: name,
                macAddress: "00:1B:44:3A:B7",
                ip: ipVal,
                createdDate: "2021-05-31",
                powerConsumption: power,
              },
            ]),
          );
    }else{
        localStorage.setItem(
            "deviceArray",
            JSON.stringify([
            {
                name: name,
                macAddress: "00:1B:44:3A:B7",
                ip: ipVal,
                createdDate: "2021-05-31",
                powerConsumption: power,
              },
            ]),
          );
    }
    name = "";
    ipVal = "";
    power ="";
    updateChart();

});
const tableRows = Array.from(tableBody.querySelectorAll("tr"))
let totalPower = tableRows.reduce((pre, row) => {
    return (pre += parseInt(row.cells[4].innerHTML));
  }, 0);
  tfoot.querySelector("tr").children[1].innerHTML = totalPower;

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return rgb = "rgb(" + x + "," + y + "," + z + ")";
}
function bgColor(a){
    
    var bg = [];
    for(var i=0 ;i<a ;i++){
        bg.push(random_color());
    }
    return bg;
}
function updateChart() {
    const tableRows = Array.from(tbody.querySelectorAll("tr"));
    let labels = tableRows.map((row) => {
      return row.cells[0].innerHTML;
    });
    let powerCons = tableRows.map((row) => {
      return row.cells[4].innerHTML;
    });
    console.log(powerCons.length)
    console.log(random_color(powerCons.length));
    const ctx = document.querySelector(".chart__content").getContext("2d");
    const data = {
      labels: labels,
      datasets: [
        {
          label: "chart",
          data: powerCons,
          backgroundColor: bgColor(powerCons.length),
          hoverOffset: 4,
        },
      ],
    };
    let chartStatus = Chart.getChart("myChart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
            title: {
              display: true,
              text: 'Power Consumption'
            }
          }
      },
    });

}

burger.addEventListener("click", ()=>{
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
        closeIcon.classList.remove("show");
        menuIcon.style.display = "block";
    }
    else {
        menu.classList.add("show");
        closeIcon.classList.add("show");
        menuIcon.style.display = "none";
    }
});
