'use strict';

const getLeapYear = (n, m) => {
  const maximum = n > m ? n : m;
  const minimum = n < m ? n : m;

  const array = [...Array(maximum - minimum + 1)];
  const allYears = array.map((elem, i) => elem = minimum + i);

  const leapYears = allYears.filter(elem => {
    if (elem % 100) {
      if (!(elem % 4)) {
        return elem;
      }
    } else {
      if (!(elem % 400)) {
        return elem;
      }
    }
  });
  return leapYears;
}

console.log(getLeapYear(-5, 12));

