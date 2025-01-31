# Introduction to Typescript

- ## What is TypeScript?

  - ### In a simple words, Additional Types (tuples, enum, interfaces, generics etc) + JavaScript = TypeScript
  - ### It is a superset of JS
  - ### developed (2012) and maintained by Microsoft
  - ### we can use typeof to check data type
  - ### Js is dynamically types -> let x = 20;
  - ### Typescript add static typing to js -> let x: number = 20;

- ## Why TypeScript?

  - ### JS Check types in run time while typescript add static typing to JS so we can handle errors before running the program. We can handle errors beofre running the program.
  - ### increase readability and code quality
  - ### We can use it React, Vue, popular JS libraray Angular use TypeScript.
  - ### It can be used in both: client and server side.
  - ### Intellisense IDE Support while coding: code completion, content assist and code hinting

- ## TS Versions

  - ### earlier versions
  - ### TypeScript 1.0 October 2014
  - ### TypeScript 2.0 September 2016
  - ### TypeScript 3.0 July 2018
  - ### TypeScript 4.0 - latest release August 2020
  - ### TypeScript 5.4 - 2024

- ## How does typescript work?

  - ### index.ts -> tsc index.ts -> index.js
  - ### Environment setup

    - #### Install node & typescript

    - #### Install node & typescript

    ```js
        local installation: npm intsall typescript --save-dev
        Or
        global installation: npm install -g typescript
    ```

    - Example 1

    ```typescript
    let userName: string;
    userName = "Omar Faruk";
    console.log(userName);
    ```

    - Example 2

    ```typescript
    function addNumbers(num1: number, num2: number) {
      return num1 + num2;
    }
    const result = addNumbers(10, 20);
    ```

### Data Types: Built-in / Basic Types

- ### Any(Super type)
  - Built in types: number, string, boolean,void,null,undefined etc
  - user-defined types:Arrays, Enums, Classes, interfaces etc.

### 1. `Number`

- Represents both integer and floating-point numbers
  ```typescript
  let userId: number;
  let age: number = 15;
  userId = 190605;
  ```

### 2. `String`

- Represents a sequence of characters.

  ```typescript
  let firstName: string;
  let lastName: string;
  firstName = "Md. Omar";
  lastName = "Faruk";
  ```

### 3. `Boolean`

- Represents a true or false value.
  ```typescript
  let isActive: boolean = true;
  ```

### 4. `any`

- Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values

  ```typescript
  let data: any = 42;
  data = "Hello";
  let password: any;
  let passwords: any[];
  ```

### 5. `void`

- Represents the absence of a value, typically used as the return type of functions that don't return anything.

  ```typescript
  function display(): void {
    console.log("Hello Programmer");
  }
  display();
  ```

### 6. `null` and `undefine`

- Represent null and undefined values, respectively.

  ```typescript
  let n: null;
  let n2: undefined;
  ```

### 7. never

- Represents a value that never occurs, such as a function that throws an error or an infinite loop.

  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

### Data Types: User defined

- ### 1. `Union Type`

  - Allows more than one type for a variable or function parameter.

    ```typescript
    let userId: string | number;

    userId = 101; // no error
    userId = "101"; // no error
    // userId = true; // error

    function userIdDataType(userId: string | number) {
      console.log(typeof userId);
    }

    userIdDataType("123"); // no error
    userIdDataType(123); // no error
    // userIdDataType(true); // error

    const isEven = (num: number | string) => {
      if (typeof num === "number") {
        console.log(typeof num); // number type
        return num % 2 === 0 ? "even" : "odd";
      } else {
        console.log(typeof num); // string type
        return Number(num) % 2 === 0 ? "even" : "odd";
      }
    };

    console.log(isEven(32));
    console.log(isEven("32"));
    ```

- ### 2. `array`

  - Represents an array of values of a specific type. 2 ways to declare: number[] or Array<number>

    ```typescript
    // Declaring an array of numbers
    let numbers: number[] = [1, 2, 3, 4, 5];

    // Declaring an array of strings
    let lists: string[];
    lists = ["Omar", "Faruk"];

    // Declaring another array of numbers
    //let lists1: (number | string); union type
    let lists1: number[] | string[]; //union type
    lists1 = [1, 2, 3, 4, 5];
    console.log(lists1);
    lists1 = ["Omar", "Faruk", "Hossain"];
    console.log(lists1);

    // Another way to define an array of strings
    let users: Array<string>;
    users = ["Omar", "Faruk", "Fazlul"];
    ```

- ### 3. `Tuple`

  - Represents an array with a fixed number of elements, each with a specific type.

  - #### 3.1 `Typed Arrays & Function`

    ```typescript
    let student: [number, string]; //define tuple
    student = [190605, "Omar Faruk"]; //initialize correctly

    // tuple using in function
    function getUser(): [string, number] {
      return ["Omar", 25];
    }
    const user = getUser();
    console.log(`Name: ${user[0]}, Age: ${user[1]}`);
    ```

  - #### 3.2 Optional and Rest Elements in Tuples

    ```typescript
    let userInfo: [string, number?]; // Second element is optional
    userInfo = ["John"];
    userInfo = ["John", 28];

    let tupleWithRest: [string, ...number[]]; // Rest element for numbers
    tupleWithRest = ["Alice", 1, 2, 3]; // alice store as a string and other elements store as numbers
    ```

  - #### 3.3 `Readonly tuple`

    - A readonly tuple in TypeScript is a tuple that cannot be modified after its declaration. This is particularly useful when you want to ensure that the data in a tuple remains constant throughout its lifecycle, making it immutable.

      ```typescript
      const user: readonly [number, string, boolean] = [101, "Alice", true];
      // user[1] = "Bob"; // Error: Cannot assign to '1' because it is    a read-only property.
      console.log(user); // [101, "Alice", true]
      ```

- ### 4. `Any` data type
  ```typescript
  let userName;
  userName = "Omar Faruk";
  console.log(typeof userName);
  userName = 15;
  console.log(typeof userName);
  userName = true;
  console.log(typeof userName);
  userName = [10, 20];
  console.log(typeof userName);
  ```
- ### 5. `object` Represents any non-primitive value.

  ```typescript
  let person: object = { name: "Alice", age: 30 };
  let user: {
    name: string;
    age: number;
  };

  user = {
    name: "anisul islam",
    age: 32,
  };

  let names: object;
  names = { name1: "anis" };
  console.log(names);

  let users: object[];
  users = [];

  let user1: { userName: string; userId: number };
  user1 = { userName: "anis", userId: 101 };
  users.push(user1);

  let user2: { userName: string; userId: number };
  user2 = { userName: "rabu", userId: 102 };

  users.push(user2);

  for (const key in users) {
    console.log(users[key]["userName"]);
  }
  ```

- ### 6. `Custom Type`

  - You can create your own data type by using the keyword "type"

    ```typescript
    type User = { userName: string; userId: number }; // Custom   type:custom type datatype declaration by type adn in general  user type define by first letter uppercase

    let users: User[] = []; // Declaring an array of User objects
    let user1: User;
    user1 = { userName: "Omar Faruk", userId: 190605 };
    users.push(user1); // Adding user1 to the users array
    console.log(users); // Output the users array after adding user1

    let user2: User;
    user2 = { userName: "Hossain", userId: 190501 };
    users.push(user2); // Adding user1 to the users array
    console.log(users);

    let user3: User;
    user3 = { userName: "Sajib Das", userId: 190405 };
    users.push(user3); // Adding user1 to the users array
    console.log(users);

    let user4: User;
    user4 = { userName: "Fazulu Houque", userId: 190506 };
    users.push(user4); // Adding user1 to the users array
    console.log(users);

    type RequestType = "GET" | "POST";
    let getRequest: RequestType;
    getRequest = "GET";
    function requestHandler(requestType: RequestType) {
      console.log(requestType);
    }
    requestHandler("POST");
    ```

- ### 7. `Class and Constructor`

  ```typescript
  class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  let user1 = new User("Omar Faruk", 25);
  user1.display();

  let user2 = new User("Rabeya Islam", 31);
  user2.display();
  ```
