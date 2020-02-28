/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numReversed = Math.abs(x).toString().split('').reverse().join('')
    return numReversed == x
};
