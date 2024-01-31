function factorial(num) {
  if (num < 0) {
    // Factorial is not defined for negative numbers
    return "Undefined";
  } else if (num === 0 || num === 1) {
    // Factorial of 0 and 1 is 1
    return 1;
  } else {
    // Calculate factorial for numbers greater than 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = factorial;
