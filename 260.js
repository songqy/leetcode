/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 *
 * https://leetcode-cn.com/problems/single-number-iii/description/
 *
 * algorithms
 * Medium (72.32%)
 * Likes:    450
 * Dislikes: 0
 * Total Accepted:    52.6K
 * Total Submissions: 72.7K
 * Testcase Example:  '[1,2,1,3,2,5]'
 *
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 进阶：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,1,3,2,5]
 * 输出：[3,5]
 * 解释：[5, 3] 也是有效的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-1,0]
 * 输出：[-1,0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[1,0]
 *
 *
 * 提示：
 *
 *
 * 2
 * -2^31
 * 除两个只出现一次的整数外，nums 中的其他数字都出现两次
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];
    if (!obj2[n]) {
      if (obj1[n]) {
        delete obj1[n];
        obj2[n] = true;
      } else {
        obj1[n] = true;
      }
    }
  }
  return Object.keys(obj1).map((v) => Number(v));
};
// @lc code=end

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
