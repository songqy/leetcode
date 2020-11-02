/*
 * https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
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

console.log(maxSumDivThree([2, 6, 2, 2, 7]));
