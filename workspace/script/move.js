let me = document.getElementById("me");

me.addEventListener("onkeydown", (event) => {

    switch(event.keyCode){

        case (40):
            me.style.top ++;
            break;

        case (38):
            me.style.bottom ++;
            break;

        case (37):
            me.style.left ++;
            break;

        case (39):
            me.style.right ++;
            break;

    }

});