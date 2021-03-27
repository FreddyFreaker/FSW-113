let grades = [90,98,78,99]

let studentGrades = Array.from(grades, function(g){
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades)

/* value 
    0:99.00000000000001
1:107.80000000000001
2:85.80000000000001
3:108.9
length:4 */
