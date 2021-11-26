/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 *
 * https://leetcode-cn.com/problems/water-and-jug-problem/description/
 *
 * algorithms
 * Medium (36.77%)
 * Likes:    330
 * Dislikes: 0
 * Total Accepted:    35K
 * Total Submissions: 95.1K
 * Testcase Example:  '3\n5\n4'
 *
 * 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
 *
 * 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
 *
 * 你允许：
 *
 *
 * 装满任意一个水壶
 * 清空任意一个水壶
 * 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 *
 *
 * 示例 1: (From the famous "Die Hard" example)
 *
 * 输入: x = 3, y = 5, z = 4
 * 输出: True
 *
 *
 * 示例 2:
 *
 * 输入: x = 2, y = 6, z = 5
 * 输出: False
 *
 *
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (
    targetCapacity === jug1Capacity ||
    targetCapacity === jug2Capacity ||
    targetCapacity === jug1Capacity + jug2Capacity
  ) {
    return true;
  }

  const max = Math.max(jug1Capacity, jug2Capacity);
  const min = Math.min(jug1Capacity, jug2Capacity);
  const modSet = new Set();
  let mod = max % min;
  while (!modSet.has(mod)) {
    modSet.add(mod);
    mod = min - mod;
    mod = (max - mod) % min;
  }
  if (targetCapacity > max) {
    if (modSet.has(targetCapacity - max)) {
      return true;
    }
  } else {
    if (modSet.has(targetCapacity % min)) {
      return true;
    }
  }
  return false;
};
// @lc code=end

console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));
console.log(canMeasureWater(2, 10, 8));
console.log(canMeasureWater(13, 11, 1)); // true
