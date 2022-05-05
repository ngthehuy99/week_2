let tbody = document.querySelector('tbody');
const element = document.querySelector(".table");
const pagi = document.querySelector('.pagination');
var tableData = [];

const pageSize = 10;
let curPage = 1;


async function getData() {
    try {
        let res = await fetch('/src/json/MOCK_DATA.json');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}    
async function renderData(page = 1) {
    let data = await getData();

    if (page == 1) {
        prevButton.style.visibility = "hidden";
    } else {
        prevButton.style.visibility = "visible";
    }

    if (page == numPages()) {
        nextButton.style.visibility = "hidden";
    } else {
        nextButton.style.visibility = "visible";
    }
    var cryptoCoin = "";
    let newdata = tableData.filter((row, index) => {
        let start = (curPage - 1) * pageSize;
        let end = curPage * pageSize;
        if (index >= start && index < end) 
            return true;
    })
    console.log(newdata)
    newdata.forEach(e => {
        let template = `
        <tr class="table__row">
            <td class="table__item text-left">${e.id}</td>
            <td class="table__item">${e.name}</td>
            <td class="table__item">${e.action}</td>
            <td class="table__item">${e.date}</td>
        </tr>
        `;
        document.getElementById("data").innerHTML = cryptoCoin;
    });

}


function previousPage() {
  if (curPage > 1) {
    curPage--;
    renderTable(curPage);
  }
}

function nextPage() {
  if ((curPage * pageSize) < tableData.length) {
    curPage++;
    renderTable(curPage);
  }
}

renderData();

function numPages() {
  return Math.ceil(tableData.length / pageSize);
}

document.querySelector('#nextButton').addEventListener('click', nextPage, false);
document.querySelector('#prevButton').addEventListener('click', previousPage, false);
//Fetch Data from API
