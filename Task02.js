'use strict';

const getNormalSentence = str => {
  let upperSign = str[0].toUpperCase();
  let smallsigns = str.slice(1, str.length).toLowerCase();
  let newStr = upperSign.concat(smallsigns);
  return newStr;
}

