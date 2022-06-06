'use strict';

const generateRandomNumbers = (count) => {
  const array = [...Array(count)];
  const randomNumbers = array.map(elem => elem = Math.round(Math.random() * 100));
  return randomNumbers;
}


