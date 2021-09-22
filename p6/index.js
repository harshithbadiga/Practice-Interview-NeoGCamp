var userInput = document.querySelectorAll(".inputs")
var addBtn = document.getElementById("add")
var minusBtn = document.getElementById("subtract")
var productBtn = document.getElementById("product")
var divideBtn = document.getElementById("divide")



addBtn.addEventListener("click" , () => {
    sum = Number(userInput[0].value) + Number(userInput[1].value)
    console.log(sum)
} )






 minusBtn.addEventListener("click" , sub)
 function sub(){
    var sub = Number(userInput[0].value) - Number(userInput[1].value)
     console.log(sub)
  }



  productBtn.addEventListener("click" , prod)

  function prod(){
    var prod = Number(userInput[0].value) * Number(userInput[1].value)
     console.log(prod)
 }


 divideBtn.addEventListener("click" , divide)

  function divide(){
    var divide = Number(userInput[0].value) / Number(userInput[1].value)
     console.log(divide)
  }