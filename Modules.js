// Import named exports
import { add, PI } from './mathUtils.js';

// Import default export
import subtract from './mathUtils.js';

console.log(add(2, 3));       // 5
console.log(PI);              // 3.14
console.log(subtract(10, 4)); // 6
console.log("This is a simple module example.");