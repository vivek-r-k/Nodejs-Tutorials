const superHero = require("./super-hero")
console.log(superHero.getName());

superHero.setName("Vivek");
console.log(superHero.getName());

//patterns of import and export of modules
// 1. if only export of one function is done
const add = require("./math")
console.log(add(3,4));

// 2. if there is an object which is exported
const math = require("./math")
console.log(math.subtract(3,2));
console.log(math.mul(3,2));
// or
const {subtract,mul} = math
console.log(subtract(3,2));
console.log(mul(3,2));
