let tbody = document.querySelector('tbody');
const table = document.querySelector(".table__content");
const tableBody = table.getElementsByTagName('tbody')[0];
const element = document.querySelector(".table");
const pageLinks = document.querySelector(".pagination");

const pageSize = 15;
(async () => {
    let res = await fetch('/src/json/MOCK_DATA.json');
    let data = await res.json();
    console.log(data);
    function pagination(data) {
        tableBody.innerHTML = "";
        pageLinks.innerHTML = "";
        let currentPage = 2;
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

            console.log(tableBody)
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
    } 
    pagination(data);

})();
//

function search() {
	let input = document.getElementById('input__search').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('table__item');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";				
		}
	}
}
