const fetch = require("node-fetch")

const URL = `https://swapi.dev/api`
const peopleEndPoint = `${URL}/people`

const getData = (id) =>{
    const idEndpoint = `${peopleEndPoint}/${id}`
    fetch(idEndpoint)
    .then(response => response.json)
    .then(data => console.log(data))
    
}

var ids= [2,3,6,10,20]
ids.forEach(id=>{
    console.log(id)
    getData(id)
})
