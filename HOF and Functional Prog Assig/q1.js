// 1. Reverse String.

// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.



const reverseString = (inputString) => {
    setTimeout(() => {
      // input words split then reverse then join
      let reverseStr = inputString.split('').reverse().join('');
      console.log("The output after reversing the string is: " + reverseStr);
    }, 2000);
  };
  
  // Example usage:
  reverseString("ramjee");
  
  