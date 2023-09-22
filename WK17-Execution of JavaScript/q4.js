// 4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

function scope() {
    console.log(x); // gives error because of pre-declaration
    console.log(y); // gives error because of pre-declaration
    console.log(z); // gives error because of pre-declaration
  
    let x = 18;
    const y = 17;
    var z = 7;
  
    console.log(x);
    console.log(y);
    console.log(z);
  }
  
  scope();