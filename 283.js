/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (64.06%)
 * Likes:    1318
 * Dislikes: 0
 * Total Accepted:    546K
 * Total Submissions: 852.5K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i + count >= nums.length) {
      nums[i] = 0;
      continue;
    }
    nums[i] = nums[i + count];
    while (nums[i] === 0 && i + count < nums.length - 1) {
      count++;
      nums[i] = nums[i + count];
    }
  }
  // console.log(nums);
};
// @lc code=end
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
