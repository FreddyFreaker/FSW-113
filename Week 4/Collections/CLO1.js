var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
  ]

  for( var student of students){
  //  console.log(student) 
   }

   /* 
   {name: 'James', dob: '01/01/2000'}
{name: 'Mandy', dob: '01/01/2001'}
{name: 'Sandy', dob: '01/01/2002'}
{name: 'Harry', dob: '01/01/2003'}
   */


   for (var student of students) {
   // console.log(`Name = ${student.name}, Date Of Birth = ${student.dob}`)
  }
/*Name = James, Date Of Birth = 01/01/2000

Name = Mandy, Date Of Birth = 01/01/2001

Name = Sandy, Date Of Birth = 01/01/2002

Name = Harry, Date Of Birth = 01/01/2003
 */

  for (var student of students) {
    const {name, dob: dateOfBirth} = student
    console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}`);
  }


  /* 
 
Name = James, Date Of Birth = 01/01/2000
Name = Mandy, Date Of Birth = 01/01/2001
Name = Sandy, Date Of Birth = 01/01/2002
Name = Harry, Date Of Birth = 01/01/2003

  */