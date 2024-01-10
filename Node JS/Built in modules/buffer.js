const buffer = new Buffer.from("Vivek")

console.log(buffer.toString()); 
console.log(buffer); //logs raw hexadecimal data
console.log(buffer.toJSON()); //the data property is in decimal equvivalent of character

console.log("\n");

buffer.write("is") //buffer size is limitted hence it replaces the particular index
console.log(buffer.toString()); 
console.log(buffer); //loggs raw hexadecimal data
console.log(buffer.toJSON()); //the data property is in decimal equvivalent to character

console.log("\n");

// also consider the following example to understand the size limitation of buffer
buffer.write("Evolution")
console.log(buffer.toString()); 
console.log(buffer); //loggs raw hexadecimal data
console.log(buffer.toJSON()); //the data property is in decimal equvivalent to character