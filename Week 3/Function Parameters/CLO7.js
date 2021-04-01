let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result)

/*
value
0:80.1
1:71.2
2:78.32000000000001
3:87.22
*/