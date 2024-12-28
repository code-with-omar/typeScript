class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

// inheritance extends

class Student extends User {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("Omar Faruk", 24, 190605);
student1.display();
