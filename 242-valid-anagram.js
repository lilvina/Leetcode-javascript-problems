/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //create two variables that will store our data for the anagrams
    //reverse and sort the strings and check to see if they are anagrams of each other
    //if it's an anagram, return true
    //else, return false

    const str1 = s.split("").sort().join("")
    const str2 = t.split("").sort().join("")

    if(str1 === str2) {
        return true
    } else {
        return false
    }

};
