function too(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
    if (i % 3 == 0) {
      console.log(i + "Fizz");
    }
    if (i % 5 == 0) {
      console.log(i + "Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + "FizzBuzz");
    }
  }
}
too(15);
