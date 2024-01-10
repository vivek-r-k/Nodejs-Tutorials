import math from "./math.mjs";

console.log(math.add(5,5));
console.log(math.sub(5,5));

// or destructure the object as:
const { add, sub } = math;

// if the individual functions are exported then:
import * as math from './math.mjs' //math is object that contains all the objects
const { mul, div } = math;
console.log(mul(5,5));
console.log(div(5,5));

// or instead of * as math we destructure it further more as:
import {mul,div} from './math.mjs'