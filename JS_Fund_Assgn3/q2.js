// 2. Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
    name: 'saksham kumar',
    age: 7,
    grade: 'C',
  };
  
  // function to update grade
  const updateGrade = (student, grade) => {
    student.grade = grade;
  };
  
  // function to print stu obj
  const printObj = (obj) => {
    for (let key in obj) {
      console.log(`${key} : ${obj[key]}`);
    }
  };
  
  // RESULT
  updateGrade(student, 'B+');
  printObj(student);