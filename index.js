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

// const path = require('path');
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

// console.log(path.join('folder1', 'folder2', 'index.html'));

// console.log(path.resolve('folder1', 'folder2', 'index.html'));

// Chapter 19. Callback Pattern

// function greet(name) {
//   console.log(name);
// }

// function higherOrderFunction(callBackFunction) {
//   const name = 'Faraz';
//   callBackFunction(name);
// }

// higherOrderFunction(greet);

// Chapter 20. Events Module

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('order-pizza', (size, toppings) => {
//   console.log('Pizza is ordered, size:', size, 'toppings:', toppings);
// });

// emitter.on('order-pizza', (size, toppings) => {
//   if (size == "Large") {
//     console.log('Cold drinks will be provided complimentary');
//   }
// });

// emitter.emit('order-pizza', 'Large', 'Extra Cheese');

// Chapter 21. Extending from EventsEmitter

// const PizzaShop = require('./pizza-shop');
// const DrinkMachine = require('./drink-machine');

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on('order-pizza', (size, toppings) => {
//   console.log('Pizza is ordered, size:', size, 'toppings:', toppings);
//   drinkMachine.serveDrink(size);
// });

// pizzaShop.order('Large', 'Pepperoni');
// pizzaShop.displayOrder();

// Chapter 23 Streams and Buffers
// const buffer = new Buffer.from('Faraz'); // it has 5 bytes

// buffer.write('Code'); // Codez
// buffer.write('Rawala'); // Rawal

// console.log(buffer.toJSON());
// console.log(buffer);
// console.log(buffer.toString());

// Chapter 25 Promise Module
// const fs = require('node:fs/promises');

// console.log('Start reading a file...');
// fs.readFile('./file.txt', 'utf-8')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// console.log('Finish reading a file...');

// async function readFile() {
//   console.log('Start reading a file...');
//   try {
//     const data = await fs.readFile('./file.txt', 'utf-8');
//     console.log(data);
//     console.log('Finish reading a file...');
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();

// Chapter 26 Streams
// const fs = require('fs');

// const readableStream = fs.createReadStream('./file.txt', {
//   encoding: 'utf-8',
//   highWaterMark: 2
// });

// const writableStream = fs.createWriteStream('./file2.txt');

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

// Chapter 27. Pipes

// const fs = require('fs');
// const zlip = require('zlib');
// const gzip = zlip.createGzip();

// const readableStream = fs.createReadStream('./file.txt', {
//   encoding: 'utf-8',
//   highWaterMark: 2
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.zip'));

// const writableStream = fs.createWriteStream('./file2.txt');

// readableStream.pipe(writableStream);

// Chapter HTTP Module

// const http = require('http');

// const server = http.createServer((req, res) => {

//   const superHero = {
//     name: 'Iron',
//     lastName: 'Man',
//     age: 30
//   }
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify(superHero));
// });

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000...');
// });

// Chapter 29 Create a Node Server

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {

//   const superHero = {
//     firstName: "Iron",
//     lastName: "Man",
//   }

// Reply with plain text
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('Hello World')

// Reply with JSON format for API
// res.writeHead(200, { 'Content-Type': 'application/json' });
// res.end(JSON.stringify(superHero));

// Reply with HTML
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.end('<h1>Hello World</h1>');

// Reply with file
// const html = fs.readFileSync('./index.html', 'utf8');
// res.end(html);
// And using streams
// fs.createReadStream('./index.html').pipe(res);
// Better way:
// fs.createReadStream(__dirname + '/index.html').pipe(res)
// });

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000...');
// });

// Chapter 32 HTML template
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {

//   const superHero = {
//     firstName: "Iron",
//     lastName: "Man",
//   }

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   const name = 'Faraz';
//   let html = fs.readFileSync('./index.html', 'utf8');
//   html = html.replace("{{name}}", name);
//   res.end(html);

// });

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000...');
// });

// Chapter 33. HTTP Routing
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // Returns the url
  // res.end(req.url);
  req.method == PUT, POST, GET, DELETE
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About Page');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      name: 'Faraz', age
        : 30
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});