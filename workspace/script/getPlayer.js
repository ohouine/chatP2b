var myHeader = new Headers();

var init = {
    method : 'GET',
    headers : myHeader,
    cache : 'default',
}

let data = await getPos()

for (let i = 0; i < data["data"].length; i++) {
    let img = document.createElement("img")
    img.src = "./image/4.png"
    img.className = "other"
    img.id = data["data"][i]["username"]
    img.style.position = "absolute"
    document.getElementById("hub").appendChild(img)
}

setInterval(async() => {
    data = await getPos()
    for (let i = 0; i < data["data"].length; i++) {
        let e = data["data"][i]
        let img = document.getElementById(e["username"])
        img.style.left = `${e["pos_x"]}px`
        img.style.top = `${e["pos_y"]}px`
    }

},500)

async function getPos() {
    const data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/users.php"),init)
    return await data.json()
}