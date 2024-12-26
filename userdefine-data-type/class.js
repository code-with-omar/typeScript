var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Omar Faruk", 25);
user1.display();
var user2 = new User("Rabeya Islam", 31);
user2.display();
