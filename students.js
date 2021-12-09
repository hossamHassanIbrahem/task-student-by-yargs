const fs= require('fs');
const addNew=(id,name,degrees,comment,total)=>{
    const students=loadStudents();
    const duplicateID = students.filter((student) => {
        return student.id === id;
      });
      if (duplicateID.length === 0) {
        students.push({
          id,
          name,
          degrees,
          comment,
          total
        });
        saveStudents(students);
        console.log("Saved");
      } else {
        console.log("Error duplicate id or student");
      }
}
/**
 * 
 * 
 */
//console.log('d')
//remove 
const remove=(id)=>{
    const students = loadStudents();
    const savedStudent = students.filter((student) => {
    return student.id === id
  })
//
  const studentAfterAction = students.filter((student) => {
    return student.id !== id
  })

  if (savedStudent.length === 0) {
    console.log(`not fount`)
  } else {
    saveStudents(studentAfterAction)
    console.log(`removed`)
  }
}
//read 
const read=(id)=>{
    const students = loadStudents();
    //
    const student = students.find((student) => {
      return student.id === id
    })
    //
    console.log(student)
    if (student) {
      console.log(`id  :${student.id}`)
      console.log(`student name :${student.name}`)
      console.log(`degrees :${student.degrees}`)
      console.log(`comment :${student.comment}`)
      console.log(`total total degrees :${student.total}`)
    } else {
      console.log(`no data entred ever`)
    }
}
//list
const list=()=>{
    const students = loadStudents();
    students.forEach((student) => {
      console.log(`id  :${student.id}`)
      console.log(`student name :${student.name}`)
      console.log(`degrees :${student.degrees}`)
      console.log(`comment :${student.comment}`)
      console.log(`total degrees :${student.total}`)
    })

}


const loadStudents = () => {
    try {
      const dataBuffer = fs.readFileSync("students.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };

//console.)
  const saveStudents = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("students.json", saveData);
  };
//

module.exports ={
    addNew,
    remove,
    read,
    list

}