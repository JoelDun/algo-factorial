const factorial = require('./factorial');

test('Factorial of 0 should be 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial of 1 should be 1', () => {
  expect(factorial(1)).toBe(1);
});

test('Factorial of positive integers should be calculated correctly', () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(6)).toBe(720);
  // Add more test cases as needed
});

test('Factorial of negative number should return "Undefined"', () => {
  expect(factorial(-5)).toBe('Undefined');
});
