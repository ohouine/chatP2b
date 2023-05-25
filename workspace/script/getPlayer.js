var myHeader = new Headers();

var init = {
    method : 'GET',
    headers : myHeader,
    cache : 'default',
}

let data = getPos()
setInterval(() => {
    /*for (let i = 0; i < data.length; i++) {
        let img = document.createElement("img")
        img.src = "./img/5.png"
        img.className = "other"
        img.id = data[i][""]
    }*/
},3000)

async function getPos() {
    const data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/users.php"),init)
    console.log(await data.json())
    return await data.json()
}