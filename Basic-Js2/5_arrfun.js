function add(a,b) {
    return a + b;
}

let result = add(10,20);
console.log(result);

// convertion arrow function =>

let resultarr = (c , d) =>{
    return c + d;
}

let sumarr =resultarr(40,50);
console.log(sumarr);

// 2nd method also called lamda function

let resultarr2 = (c , d) => c + d;
let sumarr2 =resultarr2(30,80);
console.log(sumarr2);

// another method
let printnum = a => console.log(a);
printnum(10)

// 