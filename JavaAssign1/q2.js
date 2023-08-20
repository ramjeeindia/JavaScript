// You are building a simple login system. Implement the login feature that has two variables: username and
// password. You should check if the username is "admin" and the password is "12345". If both conditions are
// true, print "Login successful"; otherwise, print "Invalid credentials".


let username = "admin";
let password = "12345";

let inputUsername = "admin"; 
let inputPassword = "12345";  

// Check if both username and password match 

if (inputUsername === username && 
    inputPassword === password) {
    console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
