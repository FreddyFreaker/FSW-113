let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades, 1.33)

console.log(result)

/*
Value
0:119.7
1:106.4
2:117.04
3:130.34
 */