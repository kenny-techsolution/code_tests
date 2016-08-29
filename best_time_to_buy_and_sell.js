//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = prices[0];
    var maxProfit = 0;
    for(var i=1;i<prices.length;i++) {
		minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit,(prices[i]-minPrice));
    }
    return maxProfit;
};