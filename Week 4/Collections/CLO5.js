var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
  
    { name: "Mandy", dob: "01/01/2020" },strong 
];
  var studentToSearch = { name: "Mandy", dob: "01/01/2001" };
  var result = students.filter((student) => student.name == studentToSearch.name);

  console.log(result)//not defined