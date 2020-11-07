/*
 * https://leetcode-cn.com/problems/minimum-falling-path-sum/
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  const shortPaths = [A[0]];
  for (let i = 1; i < A.length; ++i) {
    const path = [];
    for (let j = 0; j < A[i].length; ++j) {
      let minPath;
      if (j === 0) {
        minPath = Math.min(shortPaths[i - 1][j], shortPaths[i - 1][j + 1]);
      } else if (j === A[i].length - 1) {
        minPath = Math.min(shortPaths[i - 1][j], shortPaths[i - 1][j - 1]);
      } else {
        minPath = Math.min(shortPaths[i - 1][j], shortPaths[i - 1][j - 1], shortPaths[i - 1][j + 1]);
      }
      path[j] = minPath + A[i][j];
    }
    shortPaths.push(path);
  }
  return Math.min(...shortPaths[shortPaths.length - 1]);
};


const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(minFallingPathSum(arr));
