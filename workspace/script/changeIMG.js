 //@ts-check
 let currentImg = document.getElementById('currentImg');
 let hiddenDiv = document.getElementById('hiddenImageDiv');
 let cross = document.getElementById('cross');
 let lstImg = document.getElementsByClassName('selecImg')
 
 for (let i = 1; i <= 37; i++) {
    let img = document.createElement("img")
    img.src = `./image/${i}.png`
    img.classList.add("selecImg")
    hiddenDiv?.appendChild(img)
}
for (let i = 0; i < lstImg.length; i++) {
    
    // @ts-ignore
    lstImg[i].addEventListener("click",(e) => {
        // @ts-ignore
        currentImg.src = lstImg[i].src
        // @ts-ignore
        hiddenDiv.style.display = 'none'
    })
}

 // @ts-ignore
 currentImg.addEventListener('click',() => {hiddenDiv.style.display = 'flex'})
 // @ts-ignore
 cross.addEventListener('click',() => hiddenDiv.style.display = 'none')