const charecters = require("./data.json")

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


