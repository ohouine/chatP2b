let meme = document.getElementById("me")
var init = {
    method : 'POST',
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
    cache : 'default',
    body : JSON.stringify( {
        pos_x : meme.getBoundingClientRect().top,
        pos_y : meme.getBoundingClientRect().left
    })
}

setInterval(send,2000)

async function send() {
    const data = await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/move.php"),init)
    console.log(data)
}
