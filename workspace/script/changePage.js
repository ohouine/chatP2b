const CONNECT = document.getElementById("connect")
const CREATEACCOUNT = document.getElementById("createAccount")
const PAGE = [CONNECT,CREATEACCOUNT]

const CREATELINK = document.getElementById("createLink")

CREATELINK.addEventListener("click",(event) =>{
    console.log(CONNECT.display)
    console.log(CONNECT)
    CONNECT.style.display = "none"
    CREATEACCOUNT.style.display = "block"
    event.preventDefault()
   
})