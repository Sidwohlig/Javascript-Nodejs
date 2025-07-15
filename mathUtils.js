// mathUtils.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
export default function subtract(x, y) {
  return x - y;
}


const privateHelper = (x) => x * 2; // This is not exported, so it's private

export class Calculator {
  constructor() {
    console.log("Calculator initialized.");
  }
  multiply(a, b) {
    return a * b;
  }
}