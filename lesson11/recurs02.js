'use strict';

const createArray = (arr) => {
  const newArr = arr;
  const randomElem = Math.round(Math.random() * 10);
  newArr.push(randomElem);
  const summ = newArr.reduce((acc, item) => acc + item);
  if (summ > 50) {
    return newArr;
  }
  return createArray(newArr);
};

const exmp = [1, 2, 6, 18];
console.log(createArray(exmp));

