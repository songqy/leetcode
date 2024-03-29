/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (43.23%)
 * Likes:    1452
 * Dislikes: 0
 * Total Accepted:    340.7K
 * Total Submissions: 787K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
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
 * @return {boolean}
 */
// var canJump = function (nums) {
//   const jumpList = [];
//   const canJump = (i) => {
//     if (i >= nums.length - 1) {
//       return true;
//     }
//     if (jumpList[i] !== undefined) return jumpList[i];
//     const num = nums[i];
//     for (let j = num + i; j > i; --j) {
//       if (canJump(j)) {
//         jumpList[i] = true;
//         return true;
//       }
//     }
//     jumpList[i] = false;
//     return false;
//   };
//   return canJump(0);
// };

var canJump = function (nums) {
  const reachList = [];
  const canReach = (i) => {
    if (i === 0) return true;
    if (reachList[i] !== undefined) return reachList[i];
    for (let j = i - 1; j >= 0; --j) {
      if (nums[j] >= i - j) {
        if (canReach(j)) {
          return true;
        }
      }
    }
    reachList[i] = false;
    return false;
  };
  return canReach(nums.length - 1);
};
// @lc code=end

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([2, 0, 0]));
