 var obj1 = {
     name:"Ram",
     age: 25,
     power: "Treta"
 }

 var obj2 = {
    name:"Krishna",
    age: 31,
    power: "Dwapar"
}

function moreAge(obj1,obj2){
    if(obj1.age>obj2.age){
        console.log(`${obj1.name} is older than ${obj2.name}`)
    } else{
        console.log(`${obj2.name} is older than ${obj1.name}`)
    }
}

moreAge(obj1,obj2)