let allMess = document.querySelectorAll('p')
for (let i = 0; i < allMess.length; i++) {


    if (allMess[i].className === "send") {
        allMess[i].style.float = "right"
        allMess[i].style.marginLeft = "45%"
        allMess[i].style.marginRight = "5%"
        allMess[i].style.backgroundColor = "pink"
    }else{
        allMess[i].style.float = "left"
        allMess[i].style.marginRight = "45%"
        allMess[i].style.marginLeft = "5%"
        allMess[i].style.backgroundColor = "purple"
    }
}