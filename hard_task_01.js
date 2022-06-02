'use strict';

const greatestCommonDivisor = (a, b) => {
  let minDigit = Math.min(a, b);
  let maxDigit = Math.max(a, b);
  let rest = maxDigit % minDigit;

  return !rest ? minDigit : greatestCommonDivisor(minDigit, rest);
}

