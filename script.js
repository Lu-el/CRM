'use strict';

{
  const productName = prompt('Введите название товара');
  const productAmount = +prompt('Введите кол-во товара (только целое число)');
  const category = prompt('Введите название категории');
  const price = +prompt('Введите стоимость товара');
  const orderSum = productAmount * price;

  if (Number.isNaN(productAmount) || Number.isNaN(price)) {
    console.log(`Вы ввели некорректные данные`);
  } else (
    console.log(
      `Вы решили приобрести ${productAmount} единицы товара "${productName}",
      в общей сложности на сумму ${orderSum} вьетнамских донг.
      Сумма у вас будет списана автоматически)`)
  )
}
