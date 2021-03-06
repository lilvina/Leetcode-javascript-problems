/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.arr = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.arr.length === 0) return null
    else return this.arr.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.arr.length === 0) return 0
    else return this.arr[this.arr.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.arr.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
