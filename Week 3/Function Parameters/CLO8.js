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

var result = curveGrages(1.3, ...studentGrades)

console.log(result)

/*
value
0:117
1:104
2:114.4
3:127.4
*/