/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const valueIndexes = new Map(nums.map((n, i) => [n, i]));
    for(let index = 0; index < nums.length; index++) {
        const otherIndex = valueIndexes.get(target - nums[index]);
        if (otherIndex != index && otherIndex != null) return [otherIndex, index];
    }
};
