'use strict';

const calculate = (money, amount, promo) => {
  let result = 0;
  if (amount > 10) {
    result = money * 0.97;
    console.log(result);
  } else {
    result = money;
  }

  if (result > 30000) {
    result -= (result - 30000) * 0.15;
    console.log(result);
  }

  if (promo === "METHED") {
    result -= result * 0.1;
    console.log(result);
  } else if (result > 2000 && promo === "G3H2Z1") {
    result -= 500;
    console.log(result);
  }

  return Math.trunc(result);
}

