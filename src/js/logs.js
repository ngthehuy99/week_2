let tbody = document.querySelector('tbody');
const table = document.querySelector(".table__content");
const tableBody = table.getElementsByTagName('tbody')[0];
const element = document.querySelector(".table");
const pageLinks = document.querySelector(".pagination");
let searchBtn = document.getElementById('search-btn');
const tfoot = table.getElementsByTagName("tfoot")[0];
let prev =document.getElementById("prev")
let next =document.getElementById("next")

const pageSize = 15;

let data = [{"id":1,"name":"Victor and the Secret of Crocodile Mansion","action":"Adventure|Children|Mystery","date":"5/9/2020"},
{"id":2,"name":"Three Stooges in Orbit, The","action":"Comedy|Sci-Fi","date":"2/4/2022"},
{"id":3,"name":"Eight Legged Freaks","action":"Action|Comedy|Horror|Sci-Fi","date":"16/12/2020"},
{"id":4,"name":"Sawdust and Tinsel (Gycklarnas afton)","action":"Drama","date":"13/12/2021"},
{"id":5,"name":"Ghost Ship","action":"Horror","date":"4/2/2021"},
{"id":6,"name":"Silence, The (Sokout)","action":"Drama","date":"3/11/2020"},
{"id":7,"name":"Silk","action":"Adventure|Drama|Romance","date":"13/6/2021"},
{"id":8,"name":"Growing Pains","action":"Comedy","date":"19/2/2022"},
{"id":9,"name":"Duma","action":"Adventure|Drama","date":"15/11/2020"},
{"id":10,"name":"Annie Get Your Gun","action":"Musical|Western","date":"11/5/2021"},
{"id":11,"name":"Kings of Summer, The","action":"Comedy","date":"17/10/2020"},
{"id":12,"name":"American Sniper","action":"Action|War","date":"25/10/2020"},
{"id":13,"name":"Harley Davidson and the Marlboro Man","action":"Action|Crime|Drama","date":"23/5/2021"},
{"id":14,"name":"Passion of Ayn Rand, The","action":"Documentary|Drama|Romance","date":"14/11/2021"},
{"id":15,"name":"Drowning by Numbers","action":"Comedy|Drama","date":"22/1/2022"},
{"id":16,"name":"Lovers of the Arctic Circle, The (Los Amantes del Círculo Polar)","action":"Drama|Romance","date":"11/11/2020"},
{"id":17,"name":"McFarland USA","action":"Drama","date":"16/2/2022"},
{"id":18,"name":"Desert of the Tartars, The (Deserto dei Tartari, Il)","action":"Drama|War","date":"21/4/2021"},
{"id":19,"name":"Children of the Corn: Revelation","action":"Horror|Thriller","date":"6/12/2021"},
{"id":20,"name":"On the Beach","action":"Drama|Sci-Fi","date":"31/12/2020"},
{"id":21,"name":"Washington Heights","action":"Drama|Romance","date":"17/11/2021"},
{"id":22,"name":"According to Greta","action":"Drama|Romance","date":"21/10/2020"},
{"id":23,"name":"Macbeth","action":"Drama","date":"12/3/2022"},
{"id":24,"name":"Billy Blazes, Esq.","action":"Comedy|Western","date":"11/2/2022"},
{"id":25,"name":"Magus, The","action":"Drama|Fantasy|Mystery","date":"22/1/2022"},
{"id":26,"name":"Nine Dead Gay Guys","action":"Comedy|Crime","date":"18/9/2020"},
{"id":27,"name":"Aerial Gunner","action":"Drama|War","date":"21/10/2020"},
{"id":28,"name":"Sut (Milk)","action":"Drama","date":"21/1/2021"},
{"id":29,"name":"Enon opetukset","action":"Comedy|Drama","date":"8/2/2022"},
{"id":30,"name":"Greedy","action":"Comedy","date":"5/3/2022"},
{"id":31,"name":"Bloodbath at the House of Death","action":"Comedy|Horror","date":"7/3/2021"},
{"id":32,"name":"Always for Pleasure","action":"(no genres listed)","date":"30/5/2021"},
{"id":33,"name":"Upstream","action":"Comedy|Drama","date":"5/9/2020"},
{"id":34,"name":"Something for Everyone","action":"Comedy|Crime","date":"9/9/2021"},
{"id":35,"name":"Circus","action":"Comedy|Musical","date":"30/1/2022"},
{"id":36,"name":"Breathe In","action":"Drama|Romance","date":"31/3/2022"},
{"id":37,"name":"Carolina","action":"Comedy|Romance","date":"28/5/2021"},
{"id":38,"name":"Female Perversions","action":"Drama","date":"8/4/2022"},
{"id":39,"name":"Life, Above All","action":"Drama","date":"21/8/2021"},
{"id":40,"name":"Mortadelo & Filemon: The Big Adventure (La gran aventura de Mortadelo y Filemón)","action":"Action|Adventure|Comedy","date":"25/8/2021"},
{"id":41,"name":"Lemon Tree","action":"Drama","date":"18/9/2021"},
{"id":42,"name":"A.C.O.D.","action":"Comedy","date":"1/10/2020"},
{"id":43,"name":"Aliens","action":"Action|Adventure|Horror|Sci-Fi","date":"17/8/2021"},
{"id":44,"name":"Spaced Invaders","action":"Adventure|Comedy|Sci-Fi","date":"2/10/2020"},
{"id":45,"name":"Murders in the Rue Morgue","action":"Crime|Horror|Mystery","date":"21/6/2021"},
{"id":46,"name":"No Mercy (Yongseoneun Eupda)","action":"Thriller","date":"13/12/2020"},
{"id":47,"name":"Get Rich or Die Tryin'","action":"Action|Crime|Drama","date":"31/7/2021"},
{"id":48,"name":"That's Life!","action":"Drama","date":"16/8/2021"},
{"id":49,"name":"Dupes, The (Al-makhdu'un)","action":"Drama","date":"29/4/2021"},
{"id":50,"name":"Look What's Happened to Rosemary's Baby (a.k.a. Rosemary's Baby II)","action":"Drama|Horror","date":"3/3/2022"},
{"id":51,"name":"Albuquerque","action":"Romance|Western","date":"6/4/2021"},
{"id":52,"name":"Sisterhood of the Traveling Pants 2, The","action":"Adventure|Comedy|Drama|Romance","date":"24/5/2021"},
{"id":53,"name":"Sol ","action":"Sci-Fi","date":"18/12/2020"},
{"id":54,"name":"Pekka ja Pätkä salapoliiseina","action":"Comedy","date":"24/3/2022"},
{"id":55,"name":"About Face: Supermodels Then and Now","action":"Comedy|Documentary","date":"6/12/2021"},
{"id":56,"name":"Fugitive, The","action":"Thriller","date":"23/1/2021"},
{"id":57,"name":"Never Play Clever Again (Gendarme et les gendarmettes, Le)","action":"Comedy|Crime","date":"23/12/2021"},
{"id":58,"name":"Perfect Storm, The","action":"Drama|Thriller","date":"14/4/2021"},
{"id":59,"name":"Reach the Rock","action":"Comedy|Drama","date":"24/6/2021"},
{"id":60,"name":"Expelled from Paradise","action":"Animation","date":"12/9/2020"},
{"id":61,"name":"Question of Silence, A (De stilte rond Christine M.)","action":"Drama","date":"22/12/2021"},
{"id":62,"name":"Alone with Her","action":"Crime|Drama|Thriller","date":"20/3/2021"},
{"id":63,"name":"Waiter (Ober)","action":"Comedy","date":"19/6/2021"},
{"id":64,"name":"Akira","action":"Action|Adventure|Animation|Sci-Fi","date":"26/10/2021"},
{"id":65,"name":"Mr. Smith Goes to Washington","action":"Drama","date":"18/10/2020"},
{"id":66,"name":"Borrowed Time","action":"Drama","date":"20/4/2022"},
{"id":67,"name":"Frankenstein","action":"Drama|Horror|Sci-Fi","date":"11/12/2021"},
{"id":68,"name":"Topo, El","action":"Fantasy|Western","date":"18/9/2020"},
{"id":69,"name":"Delusions of Grandeur (La folie des grandeurs)","action":"Comedy","date":"13/7/2021"},
{"id":70,"name":"Big Chill, The","action":"Comedy|Drama","date":"22/9/2021"},
{"id":71,"name":"As Above, So Below","action":"Horror|Thriller","date":"11/10/2020"},
{"id":72,"name":"Music Man, The","action":"Children|Comedy|Musical|Romance","date":"23/8/2021"},
{"id":73,"name":"The Anomaly","action":"Action|Sci-Fi|Thriller","date":"25/12/2021"},
{"id":74,"name":"Happily N'Ever After","action":"Animation|Children|Comedy","date":"24/12/2021"},
{"id":75,"name":"My Mother (Ma mère)","action":"Drama","date":"16/8/2021"},
{"id":76,"name":"Stephanie Daley","action":"Drama","date":"30/3/2021"},
{"id":77,"name":"Private Parts","action":"Horror|Thriller","date":"4/11/2021"},
{"id":78,"name":"Brainstorm (Bicho de Sete Cabeças)","action":"Drama","date":"9/11/2021"},
{"id":79,"name":"Zero Effect","action":"Comedy|Mystery|Thriller","date":"28/2/2022"},
{"id":80,"name":"Men to Kiss","action":"Comedy|Romance","date":"10/12/2021"}]

let current = 1;
function pagination(data, currentPage) {
    tableBody.innerHTML = "";
    pageLinks.innerHTML = "";
    currentPage = current;
    
    data
        .slice((currentPage - 1 ) * pageSize, (currentPage - 1) * pageSize + pageSize)
        .forEach((e) => {
            let template = `
                <tr class="table__row">
                    <td class="table__item text-left">${e.id}</td>
                    <td class="table__item">${e.name}</td>
                    <td class="table__item">${e.action}</td>
                    <td class="table__item">${e.date}</td>
                </tr>
            `;
            tbody.innerHTML += template;
        });
    let totalPage = Math.ceil(data.length / pageSize);
    for (let i = 1; i <= totalPage; i++) {
        
        let page = document.createElement("li");
        page.classList.add("pagination__item");
        page.innerHTML = i;
        page.addEventListener("click", (e) => {
            tableBody.innerHTML = "";
            pageLinks.children[currentPage - 1].classList.remove("pagination__active");
            currentPage = parseInt(page.innerHTML);
            pageLinks.children[currentPage - 1].classList.add("pagination__active");
            
            data
                .slice(
                (parseInt(page.innerHTML) - 1) * pageSize,
                (parseInt(page.innerHTML) - 1) * pageSize + pageSize,
                )
                .forEach((e) => {
                    let template = `
                    <tr class="table__row">
                        <td class="table__item text-left">${e.id}</td>
                        <td class="table__item">${e.name}</td>
                        <td class="table__item">${e.action}</td>
                        <td class="table__item">${e.date}</td>
                    </tr>
                    `;
                    tbody.innerHTML += template;
                });
        });
        
        
        pageLinks.appendChild(page);
    }
    
    pageLinks.children[currentPage - 1].classList.add("pagination__active");
    let totalItem = data.length;
    tfoot.querySelector("tr").children[1].innerHTML = totalItem;
} 
pagination(data, current);
prev.addEventListener('click', ()=>{
    if(current>1){
        // currentPage = currentPage -1;
        tableBody.innerHTML = "";
        pageLinks.children[currentPage - 1].classList.remove("pagination__active");
        currentPage = parseInt(page.innerHTML) - 1;
        pageLinks.children[currentPage - 1].classList.add("pagination__active");
        console.log(currentPage)
        data
            .slice(
            (parseInt(page.innerHTML) - 1) * pageSize,
            (parseInt(page.innerHTML) - 1) * pageSize + pageSize,
            )
            .forEach((e) => {
                let template = `
                <tr class="table__row">
                    <td class="table__item text-left">${e.id}</td>
                    <td class="table__item">${e.name}</td>
                    <td class="table__item">${e.action}</td>
                    <td class="table__item">${e.date}</td>
                </tr>
                `;
                tbody.innerHTML += template;
            });       
        // pagination(data, current-1);
        pagination(data, current);
    }
})
prev.addEventListener('click', ()=>{
    if(current>1){
        pagination(data, current-1);
    }
})

var input = document.getElementById("input__search");
searchBtn.addEventListener('click', ()=>{
    tableBody.innerHTML = "";
    var searchData = [];
    for(var i = 0; i < data.length; i++)
    {   
        const regex = new RegExp(`.*${input.value}.*`,"i");
        if(regex.test(data[i].name))
        {
            searchData.push(data[i]);
        }
    }
    searchData.forEach((e) => {
        let template = `
            <tr class="table__row">
                <td class="table__item text-left">${e.id}</td>
                <td class="table__item">${e.name}</td>
                <td class="table__item">${e.action}</td>
                <td class="table__item">${e.date}</td>
            </tr>
        `;
        tbody.innerHTML += template;


    });
    let totalItem = searchData.length;
      tfoot.querySelector("tr").children[1].innerHTML = totalItem;
    pagination(searchData);

})

//

function myFunction() {
    var input = document.getElementById("input__search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.querySelectorAll(".table__row");
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].querySelectorAll(".table__item")[1];
      if (td) {
        var txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}
