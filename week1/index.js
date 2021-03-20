
var students = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]

console.log(students)

students[0].info = {"State":"CA", "date of birth":"01/11/96", "pay rate":"35k/year"}

students[1].info = {"State":"UK", "date of birth":"06/16/87", "pay rate":"70k/year"}

students[2].info = {"State":"NH", "date of birth":"11/27/99", "pay rate":"50k/year"}

students[3].info = {"State":"AZ", "date of birth":"04/11/90", "pay rate":"67k/year"}



students.forEach(element => console.log(element))

console.log("const replace")

const gradStudents = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]

gradStudents[0].info = {"State":"CA", "date of birth":"01/11/96", "pay rate":"35k/year"}

gradStudents[1].info = {"State":"UK", "date of birth":"06/16/87", "pay rate":"70k/year"}

gradStudents[2].info = {"State":"NH", "date of birth":"11/27/99", "pay rate":"50k/year"}

gradStudents[3].info = {"State":"AZ", "date of birth":"04/11/90", "pay rate":"67k/year"}

gradStudents.forEach(element => console.log(element))


/* When I switched the var to const I expected it to not follow all the way through the array
But infact it did go through and act just like a variable */



var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);
