'use strict';

const getAverageValue = (cash) => {
  let averageValue = 0;
  for (const elem of cash) {
    averageValue += elem;
  }
  return Math.trunc(averageValue / cash.length);
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(`Task02 - ${getAverageValue(allCashbox)}`);
