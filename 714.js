/*
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  // 首先默认购入第一天的股票
  let cash = 0, hold = -prices[0];
  for (let i = 1; i < prices.length; ++i) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
    // console.log(cash, hold);
  }
  return cash;
};



console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 2, 8, 7, 9], 2));
