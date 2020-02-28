/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let obj = {}
    let result = 0

    for(let char of s) {
        obj[char] = (obj[char] || 0) + 1
        if(obj[char] % 2 === 0){
            result += 2
        }
        // if(s.length > 2) {
        //     return s.length
        // } else {
        //     return result + 1
        // }
    }
    return s.length > result ? result + 1 : result
};
