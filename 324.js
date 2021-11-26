/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 *
 * https://leetcode-cn.com/problems/wiggle-sort-ii/description/
 *
 * algorithms
 * Medium (37.83%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    26.7K
 * Total Submissions: 70.6K
 * Testcase Example:  '[1,5,1,1,6,4]'
 *
 * 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 *
 * 你可以假设所有输入数组都可以得到满足题目要求的结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,5,1,1,6,4]
 * 输出：[1,6,1,5,1,4]
 * 解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,3,2,2,3,1]
 * 输出：[2,3,1,3,1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * 题目数据保证，对于给定的输入 nums ，总能产生满足题目要求的结果
 *
 *
 *
 *
 * 进阶：你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => b - a);
  let j = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length - 1; i += 2) {
    const t = nums[j];
    let k = j;
    while (k > i) {
      nums[k] = nums[k - 1];
      k--;
    }
    nums[i] = t;
    j++;
  }

  // console.log('nums', nums);
};
// @lc code=end

wiggleSort([1, 5, 1, 1, 6, 4]);
wiggleSort([1, 5, 1, 1, 6, 4, 9]);
wiggleSort([1, 9, 8, 1, 3, 10]);
wiggleSort([4, 5, 5, 6]);
