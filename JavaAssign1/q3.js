// You are working on a currency conversion application. Write a program that has a variable which stores the
// amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current
// exchange rate of 1 USD = 82 INR.

let amountInINR = 850;

// Exchange rate: 1 USD = 82 INR
const exchangeRateUSD_INR = 82;

// amount in US Dollars 
let amountInUSD = amountInINR / exchangeRateUSD_INR;

// Round the amountInUSD to 2 decimal places
// amountInUSD = amountInUSD.toFixed(2);

// Print the equivalent amount in US Dollars (USD)
console.log(amountInINR + " INR is " + amountInUSD +" USD");
