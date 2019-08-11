const sum = require("./sum");

xtest("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Numbers

xtest("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Floating point equality

xtest("adding floating point number", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);  This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

// Strings
// Check strings against RegEx expressions with toMatch

xtest("there is no I in TEAM", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays and iterables
// Check if an array or iterable contains a particular item using toContain

const shoppingList = ["candies", "beers", "cheetos", "sushi", "yogurt"];

xtest("the shopping list has yogurt on it", () => {
  expect(shoppingList).toContain("yogurt");
  expect(new Set(shoppingList)).toContain("yogurt");
});

// training

function capitalize(string) {
  return string.toUpperCase().charAt(0) + string.slice(1);
}

function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

xtest("Return first character of the string capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("username")).toBe("Username");
});

xtest("Reverse a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("kikoo")).toBe("ookik");
});

// Test simple calculator

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  substract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

xtest("It should calculate 1 + 1 equal 2", () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

xtest("It should substract 4 - 2 to equal 2", () => {
  expect(calculator.substract(4, 2)).toEqual(2);
});

xtest("It should multiply 2 by 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});

xtest("It should divid 10 by 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});
