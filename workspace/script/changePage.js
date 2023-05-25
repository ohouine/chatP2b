const CONNECT = document.getElementById("connect")
const CREATEACCOUNT = document.getElementById("createAccount")
const CONNECTLINK = document.getElementById("loginLink")
const PAGE = [CONNECT,CREATEACCOUNT]

const CREATELINK = document.getElementById("createLink")
CREATELINK?.addEventListener("click",(event) =>{
    CONNECT.style.display = "none"
    CREATEACCOUNT.style.display = "block"
    event.preventDefault()
    
})

CONNECTLINK?.addEventListener("click",(event) =>{
    CONNECT.style.display = "block"
    CREATEACCOUNT.style.display = "none"
    event.preventDefault()
})