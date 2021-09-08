var userInput = document.querySelector("#user-input")
var redBtn = document.querySelector("#red")
var greenBtn = document.querySelector("#green")
var blueBtn = document.querySelector("#blue")
var ouput = document.querySelector("#output")
var resetBtn = document.querySelector(".reset")



function redColor(){
    var input = userInput.value
    ouput.innerText = input
    ouput.style.color = "red"
    resetBtn.style.display = "block"
}


function greenColor(){
    var input = userInput.value
    ouput.innerText = input
    ouput.style.color = "green"
    resetBtn.style.display = "block"
}


function blueColor(){
    var input = userInput.value
    ouput.innerText = input
    ouput.style.color = "blue"
    resetBtn.style.display = "block"
}

redBtn.addEventListener("click",redColor)
greenBtn.addEventListener("click",greenColor)
blueBtn.addEventListener("click",blueColor)
resetBtn.addEventListener("click", ()=>{
    location.reload()
})