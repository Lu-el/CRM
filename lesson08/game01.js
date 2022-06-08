'use strict';

const number = Math.ceil(Math.random() * 100);
const userNumber = prompt('Введите число от 1 до 100');

const checkValidNumber = digit => {
  if (digit === null) {
    return
  } else if (Number.isNaN(+digit)) {
    checkValidNumber(prompt('Введи число!'));
  } else {
    checkValidNumber(guessNumber(digit, number));
  }
}

const guessNumber = (a, fixNumber) => {
  let x = +a;
  if (x > fixNumber) {
    console.log('Меньше!');
    return prompt('Меньше! Ваш вариант:');
  } else if (x < fixNumber) {
    console.log('Больше!');
    return prompt('Больше! Ваш вариант:');
  } else if (x === fixNumber) {
    alert('Правильно!');
    return null;
  }
}

checkValidNumber(userNumber);




