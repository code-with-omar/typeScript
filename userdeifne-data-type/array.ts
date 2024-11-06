// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Declaring an array of strings
let lists: string[];
lists = ["Omar", "Faruk"];

// Declaring another array of numbers
let lists1: number[] | string[];
lists1 = [1, 2, 3, 4, 5];
console.log(lists1);
lists1 = ["Omar", "Faruk", "Hossain"]
console.log(lists1);

// Another way to define an array of strings
let users: Array<string>;
users = ['Omar', 'Faruk', 'Fazlul'];