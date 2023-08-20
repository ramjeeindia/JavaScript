// You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.

// Example usage:

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

function printPositiveNumbers(arr) {
  console.log("Positive Numbers in the Array:");

  for (let n = 0; n < arr.length; n++) {
    if (arr[n] > 0) {
      console.log(arr[n]);
    }
  }
}

printPositiveNumbers(arr);

