/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[\W_]/g, '')
    const reversed = str.split("").reverse().join("")

    return str === reversed
};
