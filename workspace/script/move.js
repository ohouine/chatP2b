let me = document.getElementById("me");
let other = document.querySelector("other");
let hub = document.getElementById("hub");

let position = hub.getBoundingClientRect();

let haut = position.top;
let left = position.left;

window.addEventListener("keydown", (event) => {

    switch(event.key){

        case "ArrowUp":

            haut -= 10;
            
            if(position.top < haut){

                me.style.top = haut + "px";

            }
            else{

                haut = position.top
                me.style.top = haut + "px";

            }

        break;

        case "ArrowDown":

            haut += 10;

            if(position.bottom - me.getBoundingClientRect().height > haut){

                me.style.top = haut + "px";

            }
            else{

                haut = position.bottom - me.getBoundingClientRect().height;
                me.style.top = haut + "px";

            }

        break;

        case "ArrowLeft":

            left -= 10;

            if(position.left < left){

                me.style.left = left + "px";

            }
            else{

                left = position.left;
                me.style.left = left + "px";

            }

        break;

        case "ArrowRight":

            left += 10;

            if(position.right - me.getBoundingClientRect().width > left){

                me.style.left = left + "px";

            }
            else{

                left = position.right - me.getBoundingClientRect().width;
                me.style.left = left + "px";

            }


        break;

    }

});