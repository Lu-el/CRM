'use strict';

{
  const productName = 'кофеварка';
  const productAmount = 15;
  const category = 'техника для кухни';
  const price = 5699;

  const orderSum = productAmount * price;

  console.log(productName);
  console.log(orderSum);
}

{
  const productName = prompt('Введите название товара');
  const productAmount = +prompt('Введите кол-во товара (только целое число)');
  const category = prompt('Введите название категории');
  const price = +prompt('Введите стоимость товара');
  const orderSum = productAmount * price;

  console.log(typeof productName);
  console.log(typeof productAmount);
  console.log(typeof category);
  console.log(typeof price);

  console.log(
    `Вы решили приобрести ${productAmount} единицы товара "${productName}",
    в общей сложности на сумму ${orderSum} вьетнамских донг.
    Сумма у вас будет списана автоматически)`);
}
