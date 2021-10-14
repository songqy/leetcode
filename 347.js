/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (62.20%)
 * Likes:    885
 * Dislikes: 0
 * Total Accepted:    205.2K
 * Total Submissions: 329.8K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * k 的取值范围是 [1, 数组中不相同的元素的个数]
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 *
 *
 *
 *
 * 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const cntObj = {};
  for (let i = 0; i < nums.length; ++i) {
    if (cntObj[nums[i]]) {
      cntObj[nums[i]]++;
    } else {
      cntObj[nums[i]] = 1;
    }
  }
  const ansList = [];
  let min = 0;
  for (const num in cntObj) {
    if (cntObj[num] >= min) {
      let insert = false;
      for (let i = 0; i < ansList.length; ++i) {
        if (cntObj[ansList[i]] < cntObj[num]) {
          ansList.splice(i, 0, num);
          insert = true;
          break;
        }
      }
      if (!insert) {
        ansList.push(Number(num));
      }

      if (ansList.length > k) {
        min = cntObj[ansList[k - 1]];
      }
    }
  }
  return ansList.splice(0, k);
};
// @lc code=end

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
