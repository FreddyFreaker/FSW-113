const starwarsData = {"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/30/"],"starships":["http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"http://swapi.dev/api/people/1/"}

const items = starwarsData.length;

const getData = (index, prop = "name") => {
    
    return starwarsData
}

var result = getData()

//console.log(JSON.stringify(result))

var printProps = (...props) => {
    props.forEach(element => {
        console.log(element)
    


    })
    
    


}

var select = document.getElementById("ParamId")



document.getElementById("submit").addEventListener("click",function(){
    


    


if(select.value === "name"){
    const param = document.getElementById("param")
    const h2 = document.createElement("h2")
    
    h2.textContent = `Name: ${name}`
    param.appendChild(h2)
    
    printProps(name)

}
else if(select.value === "height"){
    const param = document.getElementById("param")
    const h2 = document.createElement("h2")
    
    h2.textContent = `Height: ${height}`
    param.appendChild(h2)
    
    printProps(height)

}
else if(select.value === "mass"){
    const param = document.getElementById("param")
    const h2 = document.createElement("h2")
    
    h2.textContent = `Mass: ${mass}`
    param.appendChild(h2)
    
    printProps(mass)
}

})



var name = result.name
var height =result.height
var mass = result.mass

//var param = document.getElementById("param")
   // var h2 = document.createElement("h2")
    //h2.textContent = `${name} || ${height} || ${mass}`

   // param.appendChild(h2)


//printProps(name,height,mass)


