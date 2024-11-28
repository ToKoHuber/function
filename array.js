// let ages = [10, 20, 30, 40, 50];
// let names = ["one", "two", "three", "four", "five", "six"];

// console.log(names[3]);
// console.log(ages[2]);
// console.log(ages.length);

function findSumOfAges(ages) {
  let sum = 0;
  for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  let average = sum / ages.length;
  return average;
}

let answer = findSumOfAges([10, 20, 30, 40, 50]);
console.log(answer);
