/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const objInsteadOfSet = {};
  return nums.some((n) => {
    if (objInsteadOfSet[n]) return true;
    objInsteadOfSet[n] = true;
  });
};
