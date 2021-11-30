/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (53.37%)
 * Likes:    527
 * Dislikes: 0
 * Total Accepted:    70K
 * Total Submissions: 131.1K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[3,2,3]
 * 输出：[3]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：[1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：[1,1,1,3,3,2,2,2]
 * 输出：[1,2]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let num1,
    num2,
    count1 = 0,
    count2 = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === num1) {
      count1++;
    } else if (nums[i] === num2) {
      count2++;
    } else {
      if (count1 === 0) {
        num1 = nums[i];
        count1++;
      } else if (count2 === 0) {
        num2 = nums[i];
        count2++;
      } else {
        count1--;
        count2--;
      }
    }
  }
  // console.log('num1', num1, 'count1', count1);
  // console.log('num2', num2, 'count2', count2);
  const tmpAns = [];
  if (count1 > 0) {
    tmpAns.push(num1);
  }
  if (count2 > 0) {
    tmpAns.push(num2);
  }
  const tmpCount = [0, 0];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === tmpAns[0]) {
      tmpCount[0]++;
    } else if (nums[i] === tmpAns[1]) {
      tmpCount[1]++;
    }
  }
  let m = nums.length / 3;
  if (Number.isInteger(m)) {
    m = m + 1;
  } else {
    m = Math.ceil(m);
  }
  const ans = [];
  for (let i = 0; i < tmpAns.length; ++i) {
    if (tmpCount[i] >= m) {
      ans.push(tmpAns[i]);
    }
  }
  return ans;
};
// @lc code=end

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
console.log(majorityElement([1, 2, 3]));
console.log(majorityElement([1, 2, 3, 4]));
console.log(majorityElement([2, 1, 1, 3, 1, 4, 5, 6]));
