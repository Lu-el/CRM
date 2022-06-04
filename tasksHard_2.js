'use strict';
15
  const income = +prompt('Сумма вашего дохода(усложненный вариант):');

  let taxes = 0;
  const tax1 = 0.13;
  const tax2 = 0.2;
  const tax3 = 0.3;

if (!Number.isNaN(income)) {
  let rest = 0;
  if (income > 50000) {
    rest = income - 50000;
    taxes = rest * tax3;
    rest = 35000;
  }
  if (income >= 15000) {
    rest = rest || (income - 15000);
    taxes += rest * tax2;
    rest = 15000;
  }
  if (income > 0) {
    rest = rest || income;
    taxes += rest * tax1;
  }

  console.log(`Сумма налога составляет(усложненный вариант): ${taxes}`);
} else {
  console.log(`Введены некорректные данные`);
}

