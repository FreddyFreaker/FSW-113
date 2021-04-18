import { add } from './data';
debugger
console.log(add(2, 3));



var ocj =  JSON.parse(charecters)

//var rowdata = Object.keys(charecters)
//console.log(rowdata)
 

charecters.forEach(item=>{
    var result = item;
})

var myTranformObject = charecters.map(item=>{
    return `Name:${item.name} 
    Height:${item.height} 
    Films:${item.films}`
    
})
console.log(myTranformObject)

let datalist = document.getElementById("datalist")
datalist.innerHTML = myTranformObject