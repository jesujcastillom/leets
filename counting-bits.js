/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const regex = /1/g;
    const ans = [];
    for (let i = 0; i <= n; i++) {
        ans.push(i.toString(2).match(regex)?.length || 0);
    }
    return ans;
};
