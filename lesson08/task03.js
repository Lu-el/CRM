'use strict';

const generateRandomNumbers = (count, n, m, str) => {
  const array = [...Array(count)];
  const maximum = n > m ? n : m;
  const minimum = n < m ? n : m;

  if (str === 'even' || str === 'odd') {
    const condition = str === 'even' ? 0 : 1;
    const newArray = [...Array(Math.abs((maximum - minimum)) + 1)];
    const numbersArray = newArray.map((elem, i) => elem = minimum + i);
    const filterNumbers = numbersArray.filter(elem => Math.abs(elem % 2) === condition);
    const counter = filterNumbers.length;
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.trunc(Math.random() * counter);
      randomNumbers.push(filterNumbers[randomIndex]);
    }
    return randomNumbers;
  } else {
    const randomNumbers = array.map(elem =>
      elem = Math.round(Math.random() * (maximum - minimum)) + minimum);
    return randomNumbers;
  }
}


