abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  // Abstract method to be implemented by subclasses
  abstract display(): void;
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  // Implementation of the abstract method
  display(): void {
    console.log(
      `Username: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`
    );
  }
}

// Creating an instance of Student
let student1 = new Student("Keya", 31, 1302020015);
student1.display();
