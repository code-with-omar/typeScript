let student: [number, string] //define tuple
student = [190605, "Omar Faruk"] //// initialize correctly



// tuple using in function
function getUser(): [string, number] {
    return ["Omar", 25];
}

const user = getUser();
console.log(`Name: ${user[0]}, Age: ${user[1]}`);

//   Optional and Rest Elements in Tuples

let userInfo: [string, number?]; // Second element is optional
userInfo = ["John"];
userInfo = ["John", 28];

let tupleWithRest: [string, ...number[]]; // Rest element for numbers
tupleWithRest = ["Alice", 1, 2, 3];

// Read only tuples 
//A readonly tuple in TypeScript is a tuple that cannot be modified after its declaration. This is particularly useful when you want to ensure that the data in a tuple remains constant throughout its lifecycle, making it immutable.
const allUsers: readonly [number, string, boolean] = [101, "Alice", true];

// user[1] = "Bob"; // Error: Cannot assign to '1' because it is a read-only property.
console.log(user); // [101, "Alice", true]
