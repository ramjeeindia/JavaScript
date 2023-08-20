/*Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.
 */

const fbUsers = ["Mithun", "Hitesh","Sudhanshu","Anurag","Sanket","Shahil","Farman"];
  
  function isUsersignup(user) {
    if (fbUsers.includes(user)) {
      console.log(`Yes, ${user} is present in the list`);
      //return true;
    } else {
      console.log(`No, ${user} is not a valid user`);
      //return true;
    }
  }
  
  isUserPresent("Mithun");
  
  // OUTPUT: Yes, Mithun is a valid user.
  
  isUserPresent("Someone");
  
  // OUTPUT: No, Someone is not a valid user.