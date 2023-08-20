    // You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages   like "Name should be a string," "Email should be a string," or "Age should be a number." if any field is not proper.

    let name = "Mithun";
    let email = "mithun.s@pw.live";
    let age = 21;

    // Put value string then result will age shoud be a number
    // let age = "a";
    
    function validateForm(name, email, age) {
        if (typeof name !== "string") {
          console.log("Name should be a string.");
        }
      
        if (typeof email !== "string") {
          console.log("Email should be a string.");
        }
      
        if (typeof age !== "number") {
          console.log("Age should be a number.");
        }
      }
      
      validateForm(name, email, age);
      