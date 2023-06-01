//@ts-check
let meme = document.getElementById("me")

let pos = hub.getBoundingClientRect()


async function send() {
    
    var init = {
    method : 'POST',
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
    cache : 'default',
    body : JSON.stringify( {
        pos_x : parseInt(meme.getBoundingClientRect().left - pos.left),
        pos_y : parseInt(meme.getBoundingClientRect().top - pos.top)
    })
}

    const data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/move.php"),init)
    console.log(meme.getBoundingClientRect().top - pos.top)
    console.log(meme.getBoundingClientRect().left - pos.left)
}

setInterval(send,2000)