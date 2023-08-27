// 4. Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const pwskills = {
    course: 'Full Stack Dev',
    year: 2023,
    price: 3500,
    duration : '7 months'
     };

    // funcnction to check property
    function hasProperty(obj, propertyName) {
        return propertyName in obj;
      }
      

  const propertyToCheck = "year";
  console.log(`Does the person object have the property '${propertyToCheck}'? 
  ${hasProperty(pwskills, propertyToCheck)}`);
  

