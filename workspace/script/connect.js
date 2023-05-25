let formConnect = document.getElementById("connectForm")
let usrName = document.getElementById("inptUsrName")
let usrPwd = document.getElementById("inptUsrPwd")
let pErr = document.getElementById("loginErr")

var myHeader = new Headers();


let c = console


formConnect.addEventListener("submit", (e) =>{
    
    e.preventDefault()
    var init = {
        method : 'POST',
        headers : myHeader,
        cache : 'default',
        body : JSON.stringify({
            username : usrName.value,
            password : usrPwd.value
        })
    }

    const PROMISE = fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/signin.php"),init)
    .then(function (reponse) {
        if (reponse.ok) {
            pErr.textContent = ""
            return reponse.json()
        }else{
            return reponse
            .json()
            .then(error => Promise.reject(error))
        }
    }).then(function (jsonRep) {
        
        localStorage.setItem("token", jsonRep.data.token)
    }).catch((err) => {
        
        console.log(err)

        pErr.textContent = `${err.error}`
    })

})
