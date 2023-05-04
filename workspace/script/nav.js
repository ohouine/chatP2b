let loginLink = document.getElementById("loginLinkFhub");
let loginPage = document.getElementById("loginPage");
let hubPage = document.getElementById("hubPage");

loginLink?.addEventListener("click",(e) => {

    e.preventDefault();

    loginPage.style.display = "block";
    hubPage.style.display = "none";

})