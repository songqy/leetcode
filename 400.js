/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Medium (41.90%)
 * Likes:    261
 * Dislikes: 0
 * Total Accepted:    36.1K
 * Total Submissions: 80.3K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n
 * 位上的数字。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 11
 * 输出：0
 * 解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2^31 - 1
 * 第 n 位上的数字是按计数单位（digit）从前往后数的第 n 个数，参见 示例 2 。
 *
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit2 = function (n) {
  let i = 1;
  while (n > 0) {
    const s = i + '';
    if (n <= s.length) {
      return Number(s[n - 1]);
    }
    n -= s.length;
    i++;
  }
};

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digit = 1;
  let max = 9;
  let min = 0;
  while (n > max) {
    min = max;
    digit++;
    max += digit * 9 * Math.pow(10, digit - 1);
  }
  const left = n - min;
  // console.log('left', left, digit);
  const offset = left % digit;
  const num = (left - offset) / digit + Math.pow(10, digit - 1) - 1;
  if (offset === 0) {
    return (num + '')[digit - 1];
  }
  return (num + 1 + '')[offset - 1];
};
// @lc code=end

for (let i = 1000; i <= 1100; ++i) {
  console.log(findNthDigit(i), findNthDigit2(i));
}
