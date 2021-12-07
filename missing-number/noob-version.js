/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const until = nums.length;
    const numSet = new Set(nums);
    for(let i = 0; i <= until; i++) {
        if(numSet.has(i)) continue;
        return i;
    }
};
