const obj1 = {
    name: "Bruce"
}

const obj2 = obj1;

obj2.name="wayne"

console.log(obj1.name); //logs wayne because in JavaScript both the objects
//  are pointed to the same address

// So to overcome that replace const by let for obj2
const obj3 = {
    name: "Bruce"
}

let obj4 = obj3;
obj4 = {
    name: "Wayne"
}

console.log(obj3.name); //logs Bruce

// so TODO: imp to note here that we can write exports.function_name in 
// place of module.exports.function_name but exports.function_name is like 
// first case of above example where the empty object will be exported when
// only exports.function_name is written