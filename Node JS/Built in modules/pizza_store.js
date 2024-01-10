const EventEmitter = require("node:events")
class pizza_store extends EventEmitter {
    constructor(){
        super(); //invoke a superclass's constructor that is EventEmitter's constructor
        this.orderNumber = 0;
    }
    order(size,topping) {
        this.orderNumber++;
        this.emit("order",size,topping)
    }
    displayOrderNumber(){
        console.log(`Current order number is ${this.orderNumber}`);
    }
}

module.exports = pizza_store