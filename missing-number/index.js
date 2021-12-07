/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return nums.reduce(substract, nums.length * (nums.length + 1) / 2);
};

function substract(acc, num) {
    return acc - num;
}
