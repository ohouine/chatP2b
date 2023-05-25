let me = document.getElementById("me")
let other = document.querySelectorAll(".other")
let hub = document.getElementById("hub")
let secConv = document.getElementById("secConv")

console.log(secConv.style.display);

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
    
        if (secConv.style.display === "none" && (centreY > centreYOther - 30 && centreY < centreYOther + 40) && (centreX > centreXOther - 50 && centreX < centreXOther + 30)) {
    
            secConv.style.display = "block"
    
        }
        
    })

},1000)

window.addEventListener("keydown", (event) => {

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

})