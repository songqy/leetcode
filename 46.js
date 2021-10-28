/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.28%)
 * Likes:    1592
 * Dislikes: 0
 * Total Accepted:    434.2K
 * Total Submissions: 554.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums];
  const ans = [];
  for (let i = 0; i < nums.length; ++i) {
    const tmpList = [...nums];
    tmpList.splice(i, 1);
    const nextAns = permute(tmpList);
    for (let j = 0; j < nextAns.length; ++j) {
      ans.push([nums[i], ...nextAns[j]]);
    }
  }
  return ans;
};
// @lc code=end

console.log(permute([1, 2, 3, 8]));
console.log(permute([1, 2, 3]));
console.log(permute([1, 2]));
console.log(permute([1]));
