/*
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxNum = 0, secondMax = 0, ans = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > maxNum) {
      secondMax = maxNum;
      maxNum = nums[i];
      ans = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }
  if (maxNum >= secondMax * 2) {
    return ans;
  }
  return -1;
};


console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
