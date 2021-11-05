/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (54.34%)
 * Likes:    962
 * Dislikes: 0
 * Total Accepted:    180.4K
 * Total Submissions: 332K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0;
  const pointMap = {};
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    if (num in pointMap) continue;
    pointMap[num] = num;
    let diff = 0;
    let left = num,
      right = num;
    if (num - 1 in pointMap) {
      left = pointMap[num - 1];
    }
    if (num + 1 in pointMap) {
      right = pointMap[num + 1];
    }

    pointMap[left] = right;
    pointMap[right] = left;
    diff = right - left + 1;
    if (diff > ans) {
      ans = diff;
    }
  }
  return ans;
};
// @lc code=end
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([3, 4, 1, 1, 9, 333, 2, 2]));
