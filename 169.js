/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.48%)
 * Likes:    1196
 * Dislikes: 0
 * Total Accepted:    408.5K
 * Total Submissions: 614.3K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[3,2,3]
 * 输出：3
 *
 * 示例 2：
 *
 *
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const cache = {};
  for (let i = 0; i < nums.length; ++i) {
    if (cache[nums[i]]) {
      cache[nums[i]]++;
      if (cache[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    } else {
      cache[nums[i]] = 1;
    }
  }
};
// @lc code=end

console.log(majorityElement([2]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 2, 3, 4, 4, 4, 4]));
