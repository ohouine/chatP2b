var init = {
    method : 'POST',
    headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
    cache : 'default',
    body : JSON.stringify( {
        pos_x : 5,
        pos_y : 5
    })
}

setInterval(send,2000)

async function send() {
        await fetch(new URL("https://edu.pellaux.net/m294/chat-p2b/move.php?"),init)
}
