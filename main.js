const clickButton = document.getElementById('button')
const changeText = document.getElementById('text')
const colorContext = "0123456789ABCDEF"


changeText.style.color = '#ffffff'



function clickMe() {
    let color = "#"
    for(let i=0; i<6;i++){
    color += colorContext[Math.floor(Math.random()*16)]}
    
    changeText.innerText = color
    document.body.style.backgroundColor = changeText.innerText
    changeText.style.color = color
}


clickButton.addEventListener('click',clickMe)






