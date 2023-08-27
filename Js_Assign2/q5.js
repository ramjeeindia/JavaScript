// 5. Let’s say you are workin. for an event mana.ement company. You have a list of .uest names as an array of strin.s. Your task is to return a sentence that has all the .uest names, separated by commas.

const guests = ['Anurag', 'Mithun', 'Alka', 'Prabir', 'Shivam', 'Farman'];

// function
const joinArray = (arr) => {
  return arr.join(', ');
};

// test-case
let result = joinArray(guests);
console.log(result);