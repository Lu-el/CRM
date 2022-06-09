'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  get totalPrice() {
    return this.totalPrice = this.calculateItemPrice();
  },

  add(name, price, amount = 1) {
    const obj = {
      name,
      price,
      amount,
    };
    this.items.push(obj);
    this.calculateItemPrice();
    this.increaseCount(1);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    this.items.reduce((acc, item) => {
      return acc + item.price * item.amount
    }, 0)
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const jsonObj = JSON.stringify(this.items)
    console.log(jsonObj);
    console.log(this.totalPrice);
  }
}

cart.add('Пылесос', 25500);
cart.add('Чехол для мебели', 1800, 7);
cart.add('Торт', 520, 3);

cart.print();
