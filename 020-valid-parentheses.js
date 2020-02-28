/**
 * @param {string} s
 * @return {boolean}
 */

//if the character is an closing bracket
    //pop the topmost element from the stack, if it is non empty
    //otherwise assign a dummy value of "#" to the variable
    //mapping for the opening bracket in our hash and the top element of the stack don't match, return false
    //we have an opening bracket, simply push it onto the stack
var isValid = function(s) {
    //create a stack to keep track of opening brackets
    const stack = []
    //create a hashmap for keeping track of mapping
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    //for every bracket in the expression
    for(let i = 0; i < s.length; i++) {
        let parens = s[i]
        if(map[parens]) {
            stack.push(map[parens])
        } else {
            if(parens !== stack.pop()) {
                return false
            }
        }
    }

    return stack.length === 0

};
