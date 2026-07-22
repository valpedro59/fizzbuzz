// fizzbuzz function
function fizzBuzz() {
  let i = 1;
  while (i <= 100) {
    // Cas spécial : divided by 3 and by 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      // If the number is not divided by 3 or by 5
      console.log(i);
    }
    i++;
  }
}
fizzBuzz();
