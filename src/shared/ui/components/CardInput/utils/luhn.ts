const checkLuhn = (strToTest: string, multiple: number = 10) => {
  let digit = 0;
  let sum = 0;
  let length = strToTest.length;
  let odd = false;

  for (let i: number = length - 1; i >= 0; i--) {
    digit = parseInt(strToTest[i], 10) | 0;

    if (odd) {
      digit = (digit * 2) | 0;
    }
    if (digit > 9) {
      digit = digit - 9;
    }
    odd = !odd;
    sum += digit;
  }
  let res: number = sum % multiple;
  if (res === 0) {
    return 0;
  }
  return multiple - res;
};

/**
 * Return false if strToTest is empty or checkLuhn not equals 0
 * @param {string} strToTest
 * @param {number} multiple
 * @return {boolean}
 */
export const isLuhnValid = (strToTest: string, multiple: number = 10) => {
  if (strToTest.length === 0) {
    return false;
  }

  return checkLuhn(strToTest, multiple) === 0;
};

/**
 * return a clean copy of strTotest
 * @param {string} strToTest
 * @return {string}
 */
export const cleanProposed = (strToTest: string): string => {
  return String(strToTest).replace(/[^\d]/g, '');
};
