var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
  ];
  
 
 var studentDetails = students.map((student) => {
    let newInfo = { ...student, name: student.name.toUpperCase(), college: "BU" };
    return newInfo;
  });
  for (var student of studentDetails) {
    const { name, dob: dateOfBirth, college } = student;
    console.log(
      `Name = ${name}, Date Of Birth = ${dateOfBirth}, University= ${college}`
    );
  }

  /* 
  
Name = JAMES, Date Of Birth = 01/01/2000, University= BU
Name = MANDY, Date Of Birth = 01/01/2001, University= BU
Name = SANDY, Date Of Birth = 01/01/2002, University= BU
Name = HARRY, Date Of Birth = 01/01/2003, University= BU

xdzfv jhklui gerdsbv hb luoigtesr5b nhlo;u ikplyes5rt4bn ohp[ij8]

  */