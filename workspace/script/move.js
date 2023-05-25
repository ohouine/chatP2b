let me = document.getElementById("me")
let other = document.querySelectorAll(".other")
let hub = document.getElementById("hub")
let secConv = document.getElementById("secConv")
let convQuitte = document.getElementById("quitter")

let conv = true

let position = hub.getBoundingClientRect()
let positionMe = me.getBoundingClientRect()

let haut = position.top
let gauche = position.left

let centreY = (haut - positionMe.height / 2) + (positionMe.width / 2)
let centreX = (gauche + positionMe.width / 2) + (positionMe.height / 2)

setInterval(() => {

    other.forEach(element => {

        let otherPosition = element.getBoundingClientRect()
    
        let centreYOther = (otherPosition.top - otherPosition.height / 2) + (otherPosition.width / 2)
        let centreXOther = (otherPosition.left - otherPosition.width / 2) + (otherPosition.height / 2)
    
        if (secConv.style.display === "none" && conv && (centreY > centreYOther - 40 && centreY < centreYOther + 60) && (centreX > centreXOther - 20 && centreX < centreXOther + 70)) {
    
            secConv.style.display = "flex"

            conv = false
    
        }
        
    })

},1000)

convQuitte.addEventListener("click", event => {

    event.preventDefault();

    secConv.style.display = "none";

    setTimeout(() => {

        conv = true

    },3000)

})

window.addEventListener("keydown", (event) => {

    if (secConv.style.display === "none"){

        switch(event.key){

            case "w":
    
                haut -= 10
                
                if(position.top < haut){
    
                    me.style.top = haut + "px"
    
                }
                else{
    
                    haut = position.top
                    me.style.top = haut + "px"
    
                }
    
            break
    
            case "s":
    
                haut += 10
    
                if(position.bottom - me.getBoundingClientRect().height > haut){
    
                    me.style.top = haut + "px"
    
                }
                else{
    
                    haut = position.bottom - me.getBoundingClientRect().height
                    me.style.top = haut + "px"
    
                }
    
            break
    
            case "a":
    
                gauche -= 10
    
                if(position.left < gauche){
    
                    me.style.left = gauche + "px"
    
                }
                else{
    
                    gauche = position.left
                    me.style.left = gauche + "px"
    
                }
    
            break
    
            case "d":
    
                gauche += 10
    
                if(position.right - me.getBoundingClientRect().width > gauche){
    
                    me.style.left = gauche + "px"
    
                }
                else{
    
                    gauche = position.right - me.getBoundingClientRect().width
                    me.style.left = gauche + "px"
    
                }
    
    
            break
    
        }
    
        centreY = (haut - positionMe.height / 2) + (positionMe.width / 2)
        centreX = (gauche + positionMe.width / 2) + (positionMe.height / 2)

    }

})