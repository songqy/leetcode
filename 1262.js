/*
 * https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree1 = function(nums) {
  let sum = 0;
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 3 === 0) {
      arr3.push(nums[i]);
    } else if (nums[i] % 3 === 1) {
      arr1.push(nums[i]);
    } else if (nums[i] % 3 === 2) {
      arr2.push(nums[i]);
    }
  }

  sum += arr3.reduce((acc, cur) => acc + cur, 0);

  const l1 = arr1.length % 3;
  const l2 = arr2.length % 3;

  const tmpSum = arr1.reduce((acc, cur) => acc + cur, 0) + arr2.reduce((acc, cur) => acc + cur, 0);

  if (l1 === l2) {
    return sum + tmpSum;
  }

  arr1.sort((a, b) => b - a);
  arr2.sort((a, b) => b - a);

  let tmp1 = Infinity, tmp2 = Infinity;

  if ((l1 === 0 && l2 === 1) || (l1 === 1 && l2 === 2)) {
    if (arr1.length >= 3) {
      tmp1 = arr1[arr1.length - 1] + arr1[arr1.length - 2];
      tmp2 = arr2[arr2.length - 1];
    } else {
      tmp2 = arr2[arr2.length - 1];
    }
  } else if ((l1 === 2 && l2 === 0)) {
    if (arr2.length >= 3) {
      tmp1 = arr1[arr1.length - 1] + arr1[arr1.length - 2];
      tmp2 = arr2[arr2.length - 1];
    } else {
      tmp1 = arr1[arr1.length - 1] + arr1[arr1.length - 2];
    }
  } else if ((l1 === 0 && l2 === 2)) {
    if (arr1.length >= 3) {
      tmp1 = arr1[arr1.length - 1];
      tmp2 = arr2[arr2.length - 1] + arr2[arr1.length - 2];
    } else {
      tmp2 = arr2[arr2.length - 1] + arr2[arr2.length - 2];
    }
  } else if ((l1 === 1 && l2 === 0) || (l1 === 2 && l2 === 1)) {
    if (arr2.length >= 3) {
      tmp1 = arr1[arr1.length - 1];
      tmp2 = arr2[arr2.length - 1] + arr2[arr2.length - 2];
    } else {
      tmp1 = arr1[arr1.length - 1];
    }
  }

  //   console.log('sum', sum);
  //   console.log('tmpSum', tmpSum);
  //   console.log('tmp1', tmp1);
  //   console.log('tmp2', tmp2);

  if (tmp1 > tmp2) {
    return sum + tmpSum - tmp2;
  } else {
    return sum + tmpSum - tmp1;
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  const k = 3;
  const dp = [];
  dp[0] = [0, 0, 0];
  dp[0][nums[0] % k] = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = [...dp[i - 1]];
    for (let j = 0; j < k; ++j) {
      const newNum = dp[i - 1][j] + nums[i];
      const mod = newNum % k;
      dp[i][mod] = Math.max(dp[i][mod], newNum);
    }
  }
  //   console.log('dp', dp);
  return dp[nums.length - 1][0];
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
