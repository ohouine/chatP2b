let loginP = document.getElementById("loginPage")
let hubP = document.getElementById("hubPage")
let lnklogin = document.getElementById("loginLinkFhub")
let logout = document.getElementById("logout")


if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
    
    hubP.style.display = "none"
    loginP.style.display = "block";

}else{
    lnklogin.style.display = "none"
    logout.style.display = "block"
}