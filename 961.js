/*
 * https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const obj = {};
  for (let i = 0; i < A.length; ++i) {
    obj[A[i]] = (obj[A[i]] || 0) + 1;
    if (obj[A[i]] > 1) {
      return A[i];
    }
  }
};


console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
