// You are developing a booking application for a cinema. The ticket price depends on the type of the
// viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.


let numberofChilds = 2;
let numberofAdults = 1;
let numberofSeniors = 1;

// Ticket prices
const ticketPriceChild = 100;
const ticketPriceAdult = 150;
const ticketPriceSenior = 120;

// Calculate the total price for each type of viewer
let totalChildPrice = ticketPriceChild * numberofChilds;
let totalAdultPrice = ticketPriceAdult * numberofAdults;
let totalSeniorPrice = ticketPriceSenior * numberofSeniors;

// Calculate the grand total
let Total = totalChildPrice + totalAdultPrice + totalSeniorPrice;


console.log("The Total Ticket Price is : "+ Total);

  


  

  