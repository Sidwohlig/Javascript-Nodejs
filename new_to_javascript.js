//use strict mode
"use strict";
console.log("New to JavaScript!");
let x;
console.log(x); // undefined
const y = 5.678;
console.log(Math.round(y)); 
console.log("hello"+3 +"how are you?")
console.table({name: "John", age: 30, city: "New York"}); // Displaying an object in a table format

// the var is hoisted to the top of the function or global scope
function hoistingExample() {
    console.log(z); // undefined due to hoisting
    var z = 20;
    console.log(z); // 20
}
hoistingExample();
// const doesnt allow reassignment, but the object it refers to can be modified
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT); // { key: "otherValue" }

//tyoeof function
function typeOfExample() {
    console.log(typeof x); // "undefined"

    console.log(typeof {}); // "object"
    console.log(typeof []); // "object" (arrays are also objects in JavaScript)
}
typeOfExample();

const myArray =[12, ,"hello"]
console.log(myArray[1]); // [12, <1 empty item>, "hello"]

// Object Literals
const sales = "Toyota";
function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
console.log(carTypes("Ford"));

const car2 = { 
    manyCars: { a: "Saab", b: "Jeep" }, 
    7: "Mazda" };

console.log(car2.manyCars); 
console.log(car2[7]); // Mazda

// Tagged Template Literals
 const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
  
// Log bind
function logBindExample() {
    const obj = {
        name: "Alice",
        greet: function() {
            console.log(`Hello, ${this.name}!`);
        }
    };

    const boundGreet = obj.greet.bind(obj);
    boundGreet(); // Hello, Alice!
}
logBindExample();

// Conditional Statements

const fruitType = "Oranges"; 
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}


// Control flow and error handling
// throw new Error("This is an error message!");

// try-catch example
try {
    // Intentionally causing an error
    let result = 10 / 0; // This will not throw an error, but let's simulate one
    if (result === Infinity) {
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("This block always executes, regardless of an error.");
}

// Loops and Iterations
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number: ${numbers[i]}`);
}
//do-while loop
let j = 0;  
do {
    console.log(`Do-While Loop: ${j}`);
    j++;
}while (j < 5);

// label
// function labeledLoopExample() {
//     let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// }
//  console.log("Labeled Loop Example:");
//  labeledLoopExample();

//  for in loop
const personObj = { name: "John", age: 30, city: "New York" };
for (const key in personObj) {
    console.log(`${key}: ${personObj[key]}`);
}

// for of loop  
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}


// forEach method
const numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach((number, index) => {
    console.log(`Index: ${index}, Number: ${number}`);
});

// Functions
function square(num) {
    return num * num;
}
console.log(square(5)); // 25

// function Input an Object
{
    function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE!");
})();   

// Functions scope and closures
function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // Accessing outer variable
    }

    return innerFunction;
}   ;
const inner = outerFunction();
inner(); // I am from outer function

// closure example
function makeCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// function arguments
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(", ", "Red", "Green", "Blue")); // "Red, Green, Blue, "
//(...args) rest parameter
// The rest parameter allows us to represent an indefinite number of arguments as an array.
// It must be the last parameter in the function definition.
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


// default parameters
    {  function multiply1(a, b = 1) {
        return a * b;
      }
      console.log(multiply1(5)); // 5 (b defaults to 1)
    }

     { // Arrow Functions
      const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

      const a2 = a.map(function (s) {
        return s.length;
      });

      console.log(a2); // [8, 6, 7, 9]

      const a3 = a.map((s) => s.length);

      console.log(a3); // [8, 6, 7, 9]

      //Objects and Properties
      const personObj2 = {
          name: "Alice",
          age: 25,
          greet() {
              console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
          }
      };
      personObj2.greet(); // Hello, my name is Alice and I am 25 years old.

      function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      Car.prototype.getDetails = function() {
        return `${this.year} ${this.make} ${this.model}`;
      };
      const myCar2 = new Car("Toyota", "Corolla", 2020);  
      console.log(myCar2.getDetails()); // 2020 Toyota Corolla
    }
//enumerable properties
      {  const objWithEnumerable = {
            prop1: "value1",
            prop2: "value2"
        };
        Object.defineProperty(objWithEnumerable, "nonEnumerableProp", {
            value: "non-enumerable value",
            enumerable: false
        });
        console.log(Object.keys(objWithEnumerable)); // ["prop1", "prop2"]
        console.log(objWithEnumerable.nonEnumerableProp); // "non-enumerable value"

        //for in loop with enumerable properties
        for (const key in objWithEnumerable) {
            if (objWithEnumerable.hasOwnProperty(key)) {
                console.log(`${key}: ${objWithEnumerable[key]}`);
            }
        }}
//Methods in Objects
 {      const Manager = {
        name: "Karina",
        age: 27,
        job: "Software Engineer",
      };
      const Intern = {
        name: "Tyrone",
        age: 21,
        job: "Software Engineer Intern",
      };

      function sayHi() {
        console.log(`Hello, my name is ${this.name}`);
      }

      // add sayHi function to both objects
      Manager.sayHi = sayHi;
      Intern.sayHi = sayHi;

      Manager.sayHi(); // Hello, my name is Karina
      Intern.sayHi(); // Hello, my name is Tyrone
    }

// getters and setters
{    const person1 = {
        firstName: "John",
        lastName: "Doe",
        
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set newName(x) {
            this.firstName = x + "\nThis was x ";
        },
    };  
    console.log(person1.fullName); // John Doe  
    person1.newName = "xavier";
    console.log(person1.firstName); 
  }

// Camparing objects
{   const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = obj1;    
    console.log(obj1 === obj2); // false (different references)
    console.log(obj1 === obj3); // true (same reference) 
}


// destructuring objects
{
  const person2 = { name: "Alice", age: 30, city: "New York" };
  const { name, age, city } = person2;
  console.log(name); // Alice
  console.log(age); // 30
  console.log(city); // New York
}
// Optional Chaining
{ 
  const user = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "New York"
    }
  };

  console.log(user.address?.street); // "123 Main St"
  console.log(user.contact?.email); // undefined (no error thrown)
  console.log(user.address?.city); // "New York"

}

// Map Object
{
  const sayings = new Map();
    sayings.set("dog", "woof");
    sayings.set("cat", "meow");
    sayings.set("elephant", "toot");
    sayings.size; // 3
    sayings.get("dog"); // woof
    sayings.get("fox"); // undefined
    sayings.has("bird"); // false
    sayings.delete("dog");
    sayings.has("dog"); // false

    for (const [key, value] of sayings) {
      console.log(`${key} goes ${value}`);
    }
    // "cat goes meow"
    // "elephant goes toot"

    sayings.clear();
    sayings.size; // 0

}
{
  // Spread and Rest Operators
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  console.log(combined); // [1, 2, 3, 4, 5, 6]
  function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const combinedObj = { ...obj1, ...obj2 };
  console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
  const arr3 = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = arr3;
  console.log(first); // 1
  console.log(second); // 2
  console.log(rest); // [3, 4, 5]
  const obj3 = { x: 10, y: 20, z: 30 };
  const { x, y, ...restObj } = obj3;
  console.log(x); // 10
  console.log(y); // 20
  console.log(restObj); // { z: 30 }
}

// Iterators and Generators

  function* numberGenerator() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }

  const gen = numberGenerator();
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2

  function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const fibGen = fibonacci();
  console.log(fibGen.next().value); // 0
  console.log(fibGen.next().value); // 1
  console.log(fibGen.next().value); // 1
  console.log(fibGen.next().value); // 2
  console.log(fibGen.next().value); // 3


  // generator with for-of loop
  function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
      yield count++;
    }
  }
  for (const num of countUpTo(5)) {
    console.log(num); // 1, 2, 3, 4, 5
  }

  {
    // higher-order functions
    function add(x, y) {
      return x + y;
    }
    function subtract(x, y) {
      return x - y;
    }
    function multiply(x, y) {
      return x * y;
    }
    function divide(x, y) { 
      return x / y;
    }
    function calculate(operation, x, y) {
      return operation(x, y);
    }
    console.log(calculate(add, 5, 3)); // 8
    console.log(calculate(subtract, 5, 3)); // 2
    console.log(calculate(multiply, 5, 3)); // 15
    console.log(calculate(divide, 5, 3)); // 1.666

    // returning functions
    function createMultiplier(factor) {
      return function(x) {
        return x * factor;
      };
    }
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    console.log(double(5)); // 10
    console.log(triple(5)); // 15 
  }


