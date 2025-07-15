{class Student {
  // Public instance field (each student has one)
  name;
  marks;

  // Private field (internal, not accessible outside the class)
  #remarks = "Good standing";

  // Static field (belongs to the class, not any student)
  static schoolName = "Greenwood High";

  // Constructor to initialize student info

    // Constructor - called when creating a new instance
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Instance method - available to each student
  getGrade() {
    if (this.marks >= 90) return "A";
    else if (this.marks >= 75) return "B";
    else if (this.marks >= 50) return "C";
    else return "F";
  }

  // Method to show private remarks (accessed only from inside)
  showRemarks() {
    return `${this.name}'s remark: ${this.#remarks}`;
  }

  // Static method - can be called on the class, not on instances
  static compareMarks(student1, student2) {
    return student1.marks - student2.marks;
  }

  // Static block - runs once when class is loaded
  static {
    console.log(`Welcome to ${Student.schoolName}!`);
  }
}
const alice = new Student("Alice", 88);
const bob = new Student("Bob", 93);

console.log(alice.getGrade()); // "B"
console.log(bob.getGrade());   // "A"

console.log(alice.showRemarks()); // "Alice's remark: Good standing"

console.log(Student.schoolName);  // "Greenwood High"

const diff = Student.compareMarks(alice, bob);
console.log(`Marks difference: ${diff}`); // -5
}
// Instance methods 
{
  class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255

}
// Private fields
{
  class Color {
  // Declare: every Color instance has a private field called #values.
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255

}