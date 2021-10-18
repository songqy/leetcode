/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (57.98%)
 * Likes:    759
 * Dislikes: 0
 * Total Accepted:    101K
 * Total Submissions: 174.1K
 * Testcase Example:  '10'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 *
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 *
 *
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
var nthUglyNumber = function (n) {
  const arr = [1];
  const insert = (start, num) => {
    let i = start + 1,
      j = arr.length - 1;
    while (i < j) {
      const ind = Math.ceil((j + i) / 2);
      if (arr[ind] === num) return;
      if (arr[ind - 1] < num && num < arr[ind]) {
        arr.splice(ind, 0, num);
        return;
      }
      if (arr[ind] < num) {
        i = ind;
      } else if (arr[ind] > num) {
        j = ind;
      }
    }
    arr.push(num);
  };
  for (let i = 0; i < n - 1; ++i) {
    const num = arr[i];
    insert(i, num * 2);
    insert(i, num * 3);
    insert(i, num * 5);
  }
  return arr[n - 1];
};
// @lc code=end

console.log(nthUglyNumber(10));
// console.log(nthUglyNumber(100));
// console.log(nthUglyNumber(1000));
// console.log(nthUglyNumber(888));
// console.log(nthUglyNumber(1090));
// console.log(nthUglyNumber(1600));
// console.log(nthUglyNumber(1690));

// for (let i = 200; i <= 300; ++i) {
//   console.log(nthUglyNumber(i), nthUglyNumber(i) - nthUglyNumber(i - 1));
// }
