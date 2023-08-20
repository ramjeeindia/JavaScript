// You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

function findFirstString(arr) {
  for (let s = 0; s < arr.length; s++) {
    if (typeof arr[s] === "string") {
      console.log("Found the First String:", arr[s]);
      return;
    }
  }

  console.log("No string found in the array.");
}

findFirstString(arr);
