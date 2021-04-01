let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades)

console.log(studentGrades)

/* 
value
0:90
1:80
2:88
3:98
length:4
*/
