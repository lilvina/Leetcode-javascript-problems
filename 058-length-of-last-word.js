/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitStr = s.toLowerCase().trim().split(' ')

    return splitStr[splitStr.length - 1].length

};
