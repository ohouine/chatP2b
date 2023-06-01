let loginP = document.getElementById("loginPage")
let hubP = document.getElementById("hubPage")
let lnklogin = document.getElementById("loginLinkFhub")
let logout = document.getElementById("logout")
let moi = document.getElementById("me")


if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
    
    hubP.style.display = "none"
    loginP.style.display = "block";

}else{
    lnklogin.style.display = "none"
    logout.style.display = "block"
}
getPos()
async function getPos() {
    var init = {
        method : 'GET',
        headers : myHeader,
        cache : 'default',
    }

    let data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/users.php"),init)
    data = await data.json()

    for (let i = 0; i < data["data"].length; i++) {
        if (data["data"][i]["username"] == localStorage.getItem("name")) {
            me.style.top =  `${data["data"][i]["pos_y"]}px`
            me.style.left =  `${data["data"][i]["pos_x"]}px`
        }
    }
    
}