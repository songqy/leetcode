/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (44.45%)
 * Likes:    1526
 * Dislikes: 0
 * Total Accepted:    310.1K
 * Total Submissions: 696.9K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 * 示例 4：
 *
 *
 * 输入：coins = [1], amount = 1
 * 输出：1
 *
 *
 * 示例 5：
 *
 *
 * 输入：coins = [1], amount = 2
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const arr = [0];
  for (let i = 0; i < amount; ++i) {
    if (arr[i] === undefined) continue;
    for (let j = 0; j < coins.length; ++j) {
      const sum = i + coins[j];
      if (arr[sum] === undefined) {
        arr[sum] = arr[i] + 1;
      } else {
        arr[sum] = Math.min(arr[sum], arr[i] + 1);
      }
    }
  }
  if (arr[amount] === undefined) return -1;
  return arr[amount];
};
// @lc code=end

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
console.log(coinChange([1], 1));
console.log(coinChange([1], 2));
console.log(coinChange([1, 4, 5, 9, 14], 1900));
console.log(coinChange([1, 88, 44, 5, 9, 14, 49, 90], 1900));
