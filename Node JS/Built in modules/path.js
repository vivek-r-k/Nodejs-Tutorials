const path = require("node:path")
// or const path = require("path")

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));