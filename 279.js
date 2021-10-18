/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (63.18%)
 * Likes:    1112
 * Dislikes: 0
 * Total Accepted:    206.8K
 * Total Submissions: 327K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 *
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 *
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11
 * 不是。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 12
 * 输出：3
 * 解释：12 = 4 + 4 + 4
 *
 * 示例 2：
 *
 *
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var numSquares = function (n) {
//   if (Math.sqrt(n) % 1 === 0) {
//     return 1;
//   }
//   const ansMap = {};
//   for (let i = 1; i <= n; ++i) {
//     if (Math.sqrt(i) % 1 === 0) {
//       ansMap[i] = 1;
//       continue;
//     }
//     let ans = 999999;
//     for (let j = 1; j <= i / 2; ++j) {
//       if (ans > ansMap[j] + ansMap[i - j]) {
//         ans = ansMap[j] + ansMap[i - j];
//       }
//     }
//     if (ans < 999999) {
//       ansMap[i] = ans;
//     }
//   }
//   return ansMap[n];
// };

/** 四平方数和定理 */
var numSquares = function (n) {
  if (Math.sqrt(n) % 1 === 0) {
    return 1;
  }
  let num = n;
  while (num % 4 === 0) {
    num = num / 4;
  }
  if (num % 8 === 7) return 4;

  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (Math.sqrt(n - i * i) % 1 === 0) {
      return 2;
    }
  }
  return 3;
};
// @lc code=end

// console.log(numSquares(1));
// console.log(numSquares(13));
// console.log(numSquares(2850));
// console.log(numSquares(1250));
// console.log(numSquares(7250));
// console.log(numSquares(5254));
// console.log(numSquares(10000));
