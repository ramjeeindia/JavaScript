let a = 30;
let b = 40;
// we can define function as variable
let sum = function add(a , b) {
    console.log( a + b);
}
console.log(sum);

//another way to call multiple functions

function x(printboth) {
    console.log("Hello");
    printboth();
}

function y() {
    console.log("Hi");
    
}

x(y)  //for print result

// funtion to function return

// function add(a,b) {
//     return function sum() {
//     }
// }

function add (x,y) {
    return x + y
}

let addition = add (10 , 30 )

console.log(addition);

/*Result
[Function: add]
Hello
Hi
40

*/