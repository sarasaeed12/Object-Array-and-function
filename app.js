// Name : Sara Saeed 
// Date : 28/5/2024
// Object , Array and function
// Assignment 1: Building Your Friend List
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// var people = {
//     friends : [],
// }
// console.log(people)
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// const friend1 = {
//     firstName: "Noman",
//     lastName : "Akhter",
//  };
//  const friend2 = {
//     firstName: "Saima",
//     lastName : "Aslam",
//  };
//  const friend3 = {
//     firstName: "Nimra",
//     lastName : "Taha",
//  };
// console.log(friend1)
// console.log(friend2)
// console.log(friend3)
// 3. Add these friend objects to the friends array within the people object.
// var people = {
//     friends : [friend1,friend2,friend3],
// }
// console.log(people)
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
// {
//     friends: [
//       { firstName: 'Noman', lastName: 'Akhter' },
//       { firstName: 'Saima', lastName: 'Aslam' },
//       { firstName: 'Nimra', lastName: 'Taha' }
//     ]
//   }
// Assignment 3: Company Product Catalog
// 1. Define an array named inventory to store product information.
// let inventory: { name: string; model: string; cost: number; quantity: number }[] = [];
// // 2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
// let product1 = {
//     name: "Laptop",
//     model: "Dell XPS 13",
//     cost: 1200,
//     quantity: 30
// };
// let product2 = {
//     name: "Smartphone",
//     model: "iPhone 13",
//     cost: 999,
//     quantity: 50
// };
// let product3 = {
//     name: "Headphones",
//     model: "Sony WH-1000XM4",
//     cost: 350,
//     quantity: 75
// };
// // 3. Add these product objects to the inventory array using an appropriate array method.
// inventory.push(product1);
// inventory.push(product2);
// inventory.push(product3);
// // 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
// console.log("third product:", inventory[2].quantity);
// // 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.
// let product4 = {
//     name: "Tablet",
//     model: "iPad Air",
//     cost: 600,
//     quantity: 40
// };
// // Add the fourth product to the inventory
// inventory.push(product4);
// //  Accessing and logging details of the 4th product 
// console.log(`The details of the fourth product are:`, inventory[3]);
// // 1. Define an array named inventory to store product information.
// let inventory: { name: string; model: string; cost: number; quantity: number }[] = [];
// // 2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
// let product1 = {
//     name: "Laptop",
//     model: "Dell XPS 13",
//     cost: 1200,
//     quantity: 30
// };
// let product2 = {
//     name: "Smartphone",
//     model: "iPhone 13",
//     cost: 999,
//     quantity: 50
// };
// let product3 = {
//     name: "Headphones",
//     model: "Sony WH-1000XM4",
//     cost: 350,
//     quantity: 75
// };
// // 3. Add these product objects to the inventory array using an appropriate array method.
// inventory.push(product1);
// inventory.push(product2);
// inventory.push(product3);
// // 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
// console.log("Quantity of third product:", inventory[2].quantity);
// // 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.
// let product4 = {
//     name: "Tablet",
//     model: "iPad Air",
//     cost: 600,
//     quantity: 40
// };
// // Add the fourth product to the inventory
// inventory.push(product4);
// Assignment 4: Student List Organizer
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// criteria Student {
//     name: string;
//     isSenior: boolean;
//     hasCompletedAssignments: boolean;
// }
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
var students = [
    { name: "hamza", isSenior: true, hasCompletedAssignments: true },
    { name: "madiha", isSenior: true, hasCompletedAssignments: false },
    { name: "saima", isSenior: false, hasCompletedAssignments: true },
    { name: "daniyal", isSenior: true, hasCompletedAssignments: true },
    { name: "sara", isSenior: false, hasCompletedAssignments: false }
];
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
