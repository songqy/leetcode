/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 *
 * https://leetcode-cn.com/problems/elimination-game/description/
 *
 * algorithms
 * Medium (46.70%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    7.5K
 * Total Submissions: 16K
 * Testcase Example:  '9'
 *
 * 给定一个从1 到 n 排序的整数列表。
 * 首先，从左到右，从第一个数字开始，每隔一个数字进行删除，直到列表的末尾。
 * 第二步，在剩下的数字中，从右到左，从倒数第一个数字开始，每隔一个数字进行删除，直到列表开头。
 * 我们不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
 * 返回长度为 n 的列表中，最后剩下的数字。
 *
 * 示例：
 *
 *
 * 输入:
 * n = 9,
 * 1 2 3 4 5 6 7 8 9
 * 2 4 6 8
 * 2 6
 * 6
 *
 * 输出:
 * 6
 *
 */

/**
 * @param {array} arr
 * @return {number}
 */
// function compute(arr) {
//   if (arr.length === 1) return arr[0];
//   const ans = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     ans.push(arr[i]);
//   }
//   return compute(ans.reverse());
// }

// var lastRemaining2 = function (n) {
//   const arr = [];
//   for (let i = 1; i <= n; ++i) {
//     arr.push(i);
//   }
//   return compute(arr);
// };

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let left = 1,
    right = n,
    step = 1,
    count = n,
    d = 1;
  while (left !== right) {
    if (d === 1) {
      left = left + step;
      right = count % 2 ? right - step : right;
    } else {
      left = count % 2 ? left + step : left;
      right = right - step;
    }
    d = d === 1 ? 2 : 1;
    count = Math.floor(count / 2);
    step = step * 2;
  }
  return left;
};
// @lc code=end

// const assert = require('assert');

// for (let i = 2; i <= 300; ++i) {
//   // console.log(i, lastRemaining(i), lastRemaining2(i));
//   assert(lastRemaining(i) === lastRemaining2(i));
// }
