// 3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

function SumNum(num1, num2) {
    var SumofTwo = num1 + num2
    console.log(SumofTwo); 
    return SumofTwo
}

SumNum(10,20)