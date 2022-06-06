'use strict';

const generateRandomNumbers = (count, n, m) => {
  const array = [...Array(count)];
  const maximum = n > m ? n : m;
  const minimum = n < m ? n : m;

  const randomNumbers = array.map(elem =>
    elem = Math.round(Math.random() * (maximum - minimum)) + minimum);

  return randomNumbers;
}

