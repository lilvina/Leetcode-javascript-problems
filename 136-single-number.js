/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //create a reduce function that will accumulate the single
    //return the single number
    return nums.reduce((prev, current) => {
        return prev ^= current
    })
};
