'use strict';

const converter = euro => {
  let dollar = euro * 1.2;
  let rubles = dollar * 73;
  return rubles;
}

