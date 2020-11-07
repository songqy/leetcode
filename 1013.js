/*
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 */



/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const totalSum = A.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 3 > 0) {
    return false;
  }
  const sum = totalSum / 3;
  let tmpSum = 0;
  for (let i = 0; i < A.length - 2; ++i) {
    tmpSum += A[i];
    if (tmpSum === sum) {
      tmpSum = 0;
      for (let j = i + 1; j < A.length - 1; ++j) {
        tmpSum += A[j];
        if (tmpSum === sum) {
          return true;
        }
      }
      break;
    }
  }
  return false;
};
