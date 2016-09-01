//https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var maxMoney = [];
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    maxMoney.push(nums[0]);
    maxMoney.push(Math.max(nums[0], nums[1]));

    for (var i = 2; i < nums.length; i++) {
        maxMoney.push(Math.max(maxMoney[i - 2] + nums[i], maxMoney[i - 1]));
    }
    return maxMoney.pop();
};