/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.map = []
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.map.indexOf(key) === -1) {
        this.map.push(key)
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this.map.indexOf(key)
    if(idx >= 0){
        delete this.map[idx]
    }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.map.indexOf(key) >= 0
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
