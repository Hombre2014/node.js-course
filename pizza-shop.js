const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, toppings) {
    this.orderNumber++;
    this.emit('order-pizza', size, toppings);
  }

  displayOrder() {
    console.log('Your order Number:', this.orderNumber);
  }
}

module.exports = PizzaShop;