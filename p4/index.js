var userInput = document.getElementById("#user-txt")
var systemOut = document.getElementById("#msg")
var checkBtn = document.getElementById("#check-btn")

function checkPassword(){

     
    if(userInput.value.length < 10){
        systemOut.innerText = "Please enter a passwoard greater than 10 characters"
} else{
    systemOut.innerText = "Password saved"
}
}



checkBtn.addEventListener("click", checkPassword)