let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]

let car =  {
    "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(car)
console.log(cars)

let car1 = {
    "color": "black",
  "type": "sedan",
  "registration": new Date('2016-06-02'),
  "capacity": 4
}

cars.push(car1)
console.log(cars)

let car2 = {
  "color": "white",
"type": "sedan",
"registration": new Date('2019-12-05'),
"capacity": 4
}

cars.push(car2)
console.log(cars)

let car3 = {
  "color": "white",
"type": "suv",
"registration": new Date('2019-12-05'),
"capacity": 6
}

cars.push(car3)
console.log(cars)

let car4 = {
  "color": "blue",
"type": "suv",
"registration": new Date('2019-20-05'),
"capacity": 6
}

cars.push(car4)
console.log(cars)

let car5 = {
  "color": "green",
"type": "coupe",
"registration": new Date('2015-20-05'),
"capacity": 5
}

cars.push(car5)
console.log(cars)

let car6 = {
  "color": "blue",
"type": "suv",
"registration": new Date('2019-20-05'),
"capacity": 6
}

cars.push(car6)
console.log(cars)

let car7 = {
  "color": "silver",
"type": "hatchback",
"registration": new Date('2020-20-05'),
"capacity": 5
}

cars.push(car7)
console.log(cars)
var redCars = cars.filter(function(item){
  if (item.color === "red") return true;

  return false;
})
console.log(redCars)


let sortedCars = cars.sort((c1,c2) =>(c1.capacity < c2.capacity) ? 1: (c1.capacity > c2.capacity) ? -1 : 0)
console.log(sortedCars)

const sort =cars.filter (car => car.color === "red" && "green")
console.log(sort)

