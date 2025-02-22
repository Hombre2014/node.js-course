import math from './math-esm.mjs';
// import * as math from './math-esm.mjs';
// import { add, subtract } from './math-esm.mjs';

// console.log(add(1, 2)); // 3

console.log(math.add(1, 2)); // 3
console.log(math.subtract(2, 1)); // 1

const { add, subtract } = math;
console.log(add(1, 2)); // 3
console.log(subtract(2, 1)); // 1