/*
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [cost[0], cost[1]]; // 最后一布为i时的最少cost
  for (let i = 2; i < cost.length; ++i) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  //   console.log(dp);
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};


console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
