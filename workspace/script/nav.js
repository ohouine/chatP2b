let loginLink = document.getElementById("loginLinkFhub");
let loginPage = document.getElementById("loginPage");
let hubPage = document.getElementById("hubPage");
let hubLink = document.getElementById("hubLinkLogin");

loginLink?.addEventListener("click",(e) => {

    e.preventDefault();

    loginPage.style.display = "block";
    hubPage.style.display = "none";

});

hubLink?.addEventListener("click",(e) => {

    e.preventDefault();

    loginPage.style.display = "none";
    hubPage.style.display = "block";

});