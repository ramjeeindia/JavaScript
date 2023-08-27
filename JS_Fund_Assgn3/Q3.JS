// 3.  Write a program that takes an object as input and returns the number of properties it has.

const pwskills = {
    course: 'Full Stack Dev',
    version: 2.0,
    year: 2023,
    price: 3500,
    duration : '7 months',
     };
  
  // func to count props in an obj
  const countProps = (obj) => {
    return `There are total ${Object.keys(obj).length} properties`;
  };
  
  // test-case
  let result = countProps(pwskills);
  console.log(result);