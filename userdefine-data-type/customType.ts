type User = { userName: string, userId: number }; // Custom type:custom type datatype declaration by type adn in general user type define by first letter uppercase

let users: User[] = []; // Declaring an array of User objects
let user1: User;
user1 = { userName: "Omar Faruk", userId: 190605 };
users.push(user1); // Adding user1 to the users array
console.log(users); // Output the users array after adding user1

let user2: User;
user2 = { userName: "Hossain", userId: 190501 };
users.push(user2); // Adding user1 to the users array
console.log(users)

let user3: User;
user3 = { userName: "Sajib Das", userId: 190405 };
users.push(user3); // Adding user1 to the users array
console.log(users)

let user4: User;
user4 = { userName: "Fazulu Houque", userId: 190506 };
users.push(user4); // Adding user1 to the users array
console.log(users)

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET"
function requestHandler(requestType: RequestType) {
    console.log(requestType)
}
requestHandler("POST")