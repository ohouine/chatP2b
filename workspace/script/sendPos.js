let meme = document.getElementById("me")
let position = hub.getBoundingClientRect()
var init = {
    method : 'POST',
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
    cache : 'default',
    body : JSON.stringify( {
        pos_x : parseInt(meme.getBoundingClientRect().left - position.left),
        pos_y : parseInt(meme.getBoundingClientRect().top - position.top)
    })
}

async function send() {
    const data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/move.php"),init)
}

setInterval(send,2000)