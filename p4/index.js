var userInput = document.getElementById("user-txt")
var systemOut = document.getElementById("msg")
var checkBtn = document.getElementById("check-btn")

function checkPassword(){

     
    if(userInput.value.length < 10){
        systemOut.innerText = "Please enter a passwoard greater than 10 characters"
        userInput.style.backgroundColor = "red"
        userInput.style.color = "white"
} else{
    systemOut.innerText = "Password saved"
    userInput.style.backgroundColor = "green"
    userInput.style.color = "white"
}
}



checkBtn.addEventListener("click", checkPassword)