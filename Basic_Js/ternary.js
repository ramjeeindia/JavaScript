// ternary operator

// number
let username = 2
console.log(typeof username);

// string
let title ="singh"
console.log(typeof title);

// bigint
let id = 2n
console.log(typeof id);

// boolean
let login= true
console.log(typeof login);

// object ---null
let idexit= null
console.log(typeof idexit);

// undefined
let roll= undefined
console.log(typeof roll);

// another data type [] {} is called object

let isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("Welcome to the Website");
} else {
    console.log("Please LogIn");
}


// we can write code  isUserLoggedIn ? "" : ""   ----? indicate true and : indicate false condition like below

let isUserId = false
isUserId ? console.log("Wecome") : console.log("Not Authorized");

// we can write more condition in above condition ? condition ? : : ---write last condition then first

let isPwId = true
iscourse = true

isPwId ? 
iscourse ? console.log("Wecome in course") 
: console.log("Not Authorized for Course")
: console.log("Access Denied !! Please create ID");

