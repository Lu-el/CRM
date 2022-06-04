'use strict';

{
  const income = +prompt('Сумма вашего дохода(простой вариант):');
  let tax = 0;

  if (!Number.isNaN(income)) {
    if (income > 50000) {
      tax = income * 0.3;
    } else if (income >= 15000) {
      tax = income * 0.2;
    } else {
      tax = income * 0.13;
    }

    console.log(`Сумма налога составляет(простой вариант): ${tax}`);
  } else {
    console.log(`Введены некорректные данные`);
  }
}

