'use strict';

{
  const getAveragePriceGoods = (goods) => {
    let result = 0;

    for (const elem of goods) {
      const [amount, price] = elem;
      result += price / amount;
    }

    return Math.trunc(result / goods.length);
  }

  const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
  ];

  console.log(`Task_Hard01 - ${getAveragePriceGoods(allCashbox)}`);
}
