'use strict';

const isPrime = x => {
  for (let i = 2; i < x; i++) {
    if (!(x % i)) {
      return false;
    }
  }
  return true;
}

