/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (61.91%)
 * Likes:    689
 * Dislikes: 0
 * Total Accepted:    169.4K
 * Total Submissions: 273.7K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 *
 * 「快乐数」定义为：
 *
 *
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为  1，那么这个数就是快乐数。
 *
 *
 * 如果 n 是快乐数就返回 true ；不是，则返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 2
 * 输出：false
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
 * @return {boolean}
 */
var isHappy = function (n) {
  const numSet = new Set();
  function getNewNum(num) {
    const str = num + '';
    let newNum = 0;
    for (let i = 0; i < str.length; ++i) {
      newNum += Math.pow(Number(str[i]), 2);
    }
    return newNum;
  }
  let curentNum = n;
  while (!numSet.has(curentNum) && curentNum !== 1) {
    numSet.add(curentNum);
    curentNum = getNewNum(curentNum);
  }
  return curentNum === 1;
};
// @lc code=end

const assert = require('assert');
assert(isHappy(19) === true);
assert(isHappy(1) === true);
assert(isHappy(2) === false);
