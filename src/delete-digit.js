const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr_n = n.toString().split('').map(Number);
  let result = [];

  for (let i = 0; i < arr_n.length; i++) {
    let arr = arr_n.slice(0);
    arr.splice(i, 1);
    result.push(Number(arr.join('')));
  }

  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
