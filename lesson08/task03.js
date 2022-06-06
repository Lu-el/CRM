'use strict';

const generateRandomNumbers = (count, n, m, str) => {
  const array = [...Array(count)];
  const maximum = n > m ? n : m;
  const minimum = n < m ? n : m;

  const randomNumbers = array.map(elem =>
    elem = Math.round(Math.random() * (maximum - minimum)) + minimum);

  const condition = str === 'even' ? 0 : 1;
  const filterNumbers = randomNumbers.filter(elem => Math.abs(elem % 2) === condition);;
  return filterNumbers;
}

