let loginP = document.getElementById("loginPage")
let hubP = document.getElementById("hubPage")

if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
    
    hubP.style.display = "none"
    loginP.style.display = "block";

}