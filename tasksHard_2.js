'use strict';

{
  const income = +prompt('Сумма вашего дохода(усложненный вариант):56');

  let taxes = 0;
  const tax1 = 0.13;
  const tax2 = 0.2;
  const tax3 = 0.3;

  if (!Number.isNaN(income)) {
    if (income < 15000 && income > 0) {
      taxes = income * tax1;
    } else if (income >= 15000 && income <= 50000) {
      taxes = (income - 15000) * tax2 + 15000 * tax1;
    } else if (income > 50000) {
      taxes = (income - 50000) * tax3 + 35000 * tax2 + 15000 * tax1;
    } else {
      taxes = 0;
    }

    console.log(`Сумма налога составляет(усложненный вариант): ${taxes}`);
  } else {
    console.log(`Введены некорректные данные`);
  }
}
