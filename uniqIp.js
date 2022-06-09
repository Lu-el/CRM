'use strict';

const amountUniqIp = (arr) => {
  const list = new Set();
  arr.forEach(elem => list.add(elem))
  return list.size;
}

