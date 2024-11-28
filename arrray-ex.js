// find min

// let numbers = [12, 23, 4453, 435, 234, 4, 6784657, 2345, 2343, 78564, 5];

// function numberMin(arr) {
//   let minNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (minNumber > arr[i + 1]) {
//       minNumber = arr[i + 1];
//     }
//   }
//   return minNumber;
// }
// let answer = numberMin(numbers);
// console.log(answer);

// find min and odd number

let numbers = [12, 23, 4453, 435, 234, 6784657, 2345, 2343, 78564, 15];

function numberMin(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minNumber = arr[i];
    if (arr[i] % 2 == 1) {
      if (minNumber > arr[i + 1]) {
        minNumber = arr[i + 1];
      }
    }
  }
  return minNumber;
}
let answer = numberMin(numbers);
console.log(answer);

// find max and even number

// let numbers = [12, 23, 4453, 435, 234, 4, 6784657, 2345, 2343, 78564, 5];

// function numberMin(arr) {
//   let minNumber = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (minNumber < arr[i + 1] && arr[i + 1] % 2 == 0) {
//       minNumber = arr[i + 1];
//     }
//   }
//   return minNumber;
// }
// let answer = numberMin(numbers);
// console.log(answer);
