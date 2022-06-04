'use strict';

const isPrime = x => {
  if (x >= 2 && !(x % 1)) {
    for (let i = 2; i < x; i++) {
      if (!(x % i)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

