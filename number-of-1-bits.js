/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const regex = /1/g
var hammingWeight = function(n) {
    return n.toString(2).match(regex)?.length ?? 0;
};
