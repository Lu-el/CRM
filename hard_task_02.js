'use strict';

const getMinDigit = (a, b) => {
  let minDigit = (a < b) && a ||
    (a > b) && b ||
    (a === b) && 'Числа равны' ||
    0;
  return minDigit;
}

() => {
  const digit1 = +prompt('Введите число');
  const digit2 = +prompt('Введите число');

  if (!Number.isNaN(digit1) && !Number.isNaN(digit2)) {
    console.log(getMinDigit(digit1, digit2));
  } else {
    console.log('Попробуйте снова')
  }
}
