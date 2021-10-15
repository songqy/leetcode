/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 *
 * https://leetcode-cn.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (69.19%)
 * Likes:    375
 * Dislikes: 0
 * Total Accepted:    79.3K
 * Total Submissions: 114.5K
 * Testcase Example:  '38'
 *
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 *
 * 示例:
 *
 * 输入: 38
 * 输出: 2
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 *
 *
 * 进阶:
 * 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;
  const n = num % 9;
  if (n === 0) return 9;
  return n;
};
// @lc code=end

console.log(addDigits(38));
// console.log(addDigits(39));
// console.log(addDigits(40));
// console.log(addDigits(41));
// console.log(addDigits(42));
// console.log(addDigits(429));

// for (let i = 0; i <= 100; ++i) {
//   console.log(`${i}:${addDigits(i)}`);
// }
