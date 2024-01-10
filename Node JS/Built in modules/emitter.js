// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()

// emitter.on("order-pizza",(size,topping) => {
//     console.log(`Order recieved! Baking ${size} pizza with ${topping}`);
// })

// emitter.on("order-pizza",(size) => {
//     if(size == "large") console.log("Serving a complimentary drink");
// })

// console.log("The line 4 doesn't wait until the order-pizza event is occured. Hence this line of code is logged first");

// emitter.emit("order-pizza","large","mushroom")

// TODO: Below is also in-built module Emitter but if we want to use the class as 
// emitter which is in pizza_store module.
// so to run it comment all the above lines
const pizza_store = require('./pizza_store')
const DrinkingMachine = require('./drinkingMachine')
const pizzaShop = new pizza_store();
const drinkingMachine = new DrinkingMachine();

pizzaShop.on("order", (size,topping) => {
    console.log(`Order recieved! Baking ${size} pizza with ${topping}`);
    drinkingMachine.serveDrink(size)
})
pizzaShop.order("large","mushrooms")
pizzaShop.displayOrderNumber()