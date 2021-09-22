var obj1 = {
    name: "Ram",
    age: "Treta",
    power: 2500
}


var obj2 = {
    name: "Krishna",
    age: "Dwapar",
    power: 5000
}


function morePower(obj1,obj2){
    var namePower1 = (obj1.name.length) * 35
    var namePower2 = (obj2.name.length) * 35
    var totalPower1 = namePower1 + obj1.power
    var totalPower2 = namePower2 + obj2.power

    if(totalPower1 > totalPower2){
        console.log(`${obj1.name} is more power full than ${obj2.name}`)
    } else{
        console.log(`${obj2.name} is more power full than ${obj1.name}`)
    }


}

morePower(obj1,obj2)