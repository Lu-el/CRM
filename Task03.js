'use strict';

const overturnString = str => {
let n = 1;
  let newStr = str[str.length - n++];
  newStr += str[str.length - n++];
  newStr += str[str.length - n++];
  newStr += str[str.length - n++];
  newStr += str[str.length - n++];
  return newStr
}

console.log(overturnString('Привет мир'));
