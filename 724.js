/*
 * https://leetcode-cn.com/problems/find-pivot-index/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftNum = 0;
  for (let i = 0; i < nums.length; ++i) {
    const rightNum = totalSum - leftNum - nums[i];
    if (leftNum === rightNum) return i;
    leftNum += nums[i];
  }
  return -1;
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
