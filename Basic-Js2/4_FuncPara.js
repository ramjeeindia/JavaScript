// function with single parameter

function greet(name) {
    // $ as using for concat under backtics
    console.log(`Hello ${name} !`);
}
greet("Ramjee");
greet("Saksham");

//function with default parameter

function greetd(named = 'Guest') {
    console.log(`Hi ${named} !`);
}
greetd("Ramjee");
greetd("Saksham");
// if greetd not sully then default name will print
greetd();

/* Result
Hi Ramjee !
Hi Saksham !
Hi Guest !

*/

// function with multiple parameter

function calsum (num1, num2){
    return num1 + num2;
}

console.log (calsum(10,20));

// result 30

function calculatesum (n1, n2 ,n3){
    return n1 + n2 + n3;
}

console.log (calculatesum(10,20,40));

// array function

const nums = [1,2,3,4,5]
function prtarry(arr) {
}
console.log(nums);

// result [ 1, 2, 3, 4, 5 ]

const enums = [1,2,3,4,5]
function earryprt(array) {
    for (let i = 0; i < array.length; i++) {
 console.log(array[i])
    }
    }

earryprt(enums)
/* Result
1
2
3
4
5
*/

// single with multiple name

function greetings (name, city){
    console.log(`Hello ${name} from city ${city}`)
}
greetings("John","Delhi") 

// Result Hello John from city Delhi  but if value place change then it will be show as ("Delhi","John") Hello Delhi from city John for correct this we define as below

// parameter shoud be {}
function details ({name, city}){
    console.log(`Hello ${name} from city ${city}`)
}
// variable name should be {} and declare
details({city:"Delhi",name:"John"})

// Unlimited no of argument without parameter passing

function  sumifarguments() {
    console.log(arguments);
}
sumifarguments(1,2,3)
sumifarguments(1,2,3,4,5)

// array passing

// function  sumifargument() {

//     const argsArray = Array.from(argument)
//     let sum = argsArray.reduce(function(acc, curr){
//         return acc + curr
//     },0)
//     return sum

//     // console.log(argsArray)
//     // argument.reduce()
// }
// console.log(sumifargument(1,2,3))
// console.log(sumifargument(1,2,3,4,5))


// ...using rest parameter

function sumargus(...numbers){
console.log(numbers)}

console.log(sumifarguments(1,2,3))
console.log(sumifarguments(1,2,3,4,5))

/*
[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
undefined
*/

// method 2

function sumargus(...numbers){

    let sum = numbers.reduce(function(acc,curr){
        return acc + curr
    },0)
    // console.log(numbers)
    return sum
}
    
    console.log(sumifarguments(1,2,3))
    console.log(sumifarguments(1,3,4,5,6))
    
    /*
    [Arguments] { '0': 1, '1': 3, '2': 4, '3': 5, '4': 6 }
     undefined
    */