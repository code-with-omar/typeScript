class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }

  // display(): void {
  //   console.log(`username: ${this.userName}, age: ${this.age}`);
  // }
}

let user01 = new User("Omar Faruk", 25);
// user1.display();

let user02 = new User("Rabeya Islam", 31);
// user2.display();
