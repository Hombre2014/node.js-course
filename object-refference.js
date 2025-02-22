const obj1 = {
  name: 'John',
}

// Modifying the property of obj2 will also modify the property of obj1
// const obj2 = obj1;
// obj2.name = 'Doe';

// console.log(obj1.name); // Doe
// console.log(obj2.name); // Doe

let obj2 = obj1

// Creating a new object with the same properties as obj1 will not modify obj1
obj2 = {
  name: "Doe"
}

console.log(obj1.name); // John