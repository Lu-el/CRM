'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  setDiscount(promocode) {
    switch (promocode) {
      case promocode = 'METHED':
        this.discount = 15;
        break;
      case promocode = 'NEWYEAR':
        this.discount = 21;
        break;
      default:
        this.discount = 0;
        break;
    }
  },

  add(name, price, amount = 1) {
    const obj = {
      name,
      price,
      amount,
    };
    this.items.push(obj);
    this.increaseCount(obj.amount);
    this.totalPrice;
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    const generall = this.items.reduce(((acc, item) => acc + item.price * item.amount),
        0);
    return generall - this.discount * generall / 100;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const jsonObj = JSON.stringify(this.items);
    console.log(jsonObj);
    console.log(this.totalPrice);
  },
};

cart.add('Пылесос', 25500);
cart.add('Чехол для мебели', 1800, 7);
cart.add('Торт', 520, 3);

cart.print();
