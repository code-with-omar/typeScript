var users = []; // Declaring an array of User objects
var user1;
user1 = { userName: "Omar Faruk", userId: 190605 };
users.push(user1); // Adding user1 to the users array
console.log(users); // Output the users array after adding user1
var user2;
user2 = { userName: "Hossain", userId: 190501 };
users.push(user2); // Adding user1 to the users array
console.log(users);
var user3;
user3 = { userName: "Sajib Das", userId: 190405 };
users.push(user3); // Adding user1 to the users array
console.log(users);
var user4;
user4 = { userName: "Fazulu Houque", userId: 190506 };
users.push(user4); // Adding user1 to the users array
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
