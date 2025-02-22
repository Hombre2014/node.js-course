// require('./banana')
// require('./apple')

// When exporting an instance of a class

// const superHero = require('./super-hero');

// console.log(superHero.getName()); // Superman

// superHero.setName('Batman');

// console.log(superHero.getName()); // Batman

// const newSuperHero = require('./super-hero');

// console.log(newSuperHero.getName()); // Batman



// When exporting the class itself

// const superHero = require('./super-hero');
// const superman = new superHero('Superman');
// console.log(superman.getName()); // Superman

// const newBatman = require('./super-hero');
// const batman = new newBatman('Batman');
// console.log(batman.getName()); // Batman

// 13 Module Import Export Patterns
// const add = require('./math');
// console.log(add(1, 2)); // 3

// const math = require('./math');
// console.log(math.subtract(1, 2)); // -1
// console.log(math.add(2, 1)); // 3

// const { add, subtract } = require('./math');
// console.log(add(1, 2)); // 3
// console.log(subtract(2, 1)); // 1

// 16 Module JSON
// const data = require('./data.json');

// console.log(data); // { name: 'John', age: 30 }

// 18. Path module

const path = require('path');
// const filePath = path.join(__dirname, 'apple.js');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

console.log(path.join('folder1', 'folder2', 'index.html'));

console.log(path.resolve('folder1', 'folder2', 'index.html'));
