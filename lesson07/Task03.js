'use strict';

const addPrefix = (arr, prefix) => {
  const newList = [];
  for (const elem of arr) {
    const newElem = [prefix, elem].join(' ');
    newList.push(newElem);
  }
  return newList;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(`Task03 - ${addPrefix(names, 'Mr')}`);
