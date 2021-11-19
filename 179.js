/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (40.97%)
 * Likes:    795
 * Dislikes: 0
 * Total Accepted:    122.4K
 * Total Submissions: 298.9K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 *
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [10,2]
 * 输出："210"
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出："1"
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums = [10]
 * 输出："10"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let s1 = a + '';
    let s2 = b + '';
    if (s1.length < s2.length) {
      s2 = s2.slice(0, s1.length);
    } else if (s1.length > s2.length) {
      s1 = s1.slice(0, s2.length);
    }
    if (s1 > s2) return -1;
    else if (s1 < s2) return 1;
    return a + '' + b > b + '' + a ? -1 : 1;
  });
  const ans = nums.join('');
  if (ans[0] === '0') return '0';
  return ans;
};
// @lc code=end

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([1]));
console.log(largestNumber([10]));
console.log(largestNumber([10, 11, 4, 42]));
console.log(largestNumber([432, 43243]));
console.log(largestNumber([0, 0]));
