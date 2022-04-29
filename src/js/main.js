let element=document.getElementById("error");
let login = document.querySelector(".login__form")
login.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usrName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(usrName === "john" && password === "1234"){
        window.location.replace("/week2/dashboard.html");
    }
    else{
        element.classList.add("unhide");
    }
});