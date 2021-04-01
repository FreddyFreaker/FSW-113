let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades)

console.log(result)

/*
Value
0:99.00000000000001
1:88
2:96.80000000000001
3:107.80000000000001
 */