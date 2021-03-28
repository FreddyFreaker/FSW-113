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

