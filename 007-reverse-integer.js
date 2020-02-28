/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    if(reversed > 2**31) {
        return 0
    }
    return reversed * Math.sign(x)
};
