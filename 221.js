/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (47.61%)
 * Likes:    889
 * Dislikes: 0
 * Total Accepted:    141.4K
 * Total Submissions: 296.5K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：matrix = [["0"]]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * matrix[i][j] 为 '0' 或 '1'
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const cache = [];
  const iLen = matrix.length;
  const jLen = matrix[0].length;

  function computeM(i, j) {
    if (cache[i] && cache[i][j] >= 0) {
      return cache[i][j];
    }
    let m = 0;
    if (matrix[i][j] === '1') {
      m = 1;
      if (i + 1 < iLen && j + 1 < jLen) {
        const nextM = computeM(i + 1, j + 1);
        m = nextM + 1;
        for (let k = 1; k <= nextM; ++k) {
          if (matrix[i + k][j] !== '1' || matrix[i][j + k] !== '1') {
            m = k;
            break;
          }
        }
      }
    }
    if (!cache[i]) {
      cache[i] = [];
    }
    cache[i][j] = m;
    return m;
  }
  let max = 0;
  for (let i = 0; i < iLen; ++i) {
    for (let j = 0; j < jLen; ++j) {
      if (matrix[i][j] === '1') {
        const m = computeM(i, j);
        if (m > max) {
          max = m;
        }
      }
    }
  }

  // console.log(cache);

  return max * max;
};
// @lc code=end

console.log(
  maximalSquare([
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '0', '0', '1'],
  ])
);
console.log(
  maximalSquare([
    ['0', '1'],
    ['1', '0'],
  ])
);
console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);

console.log(
  maximalSquare([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['0', '0', '1', '1', '1'],
  ])
);

console.log(
  maximalSquare([
    ['0', '0', '0', '1'],
    ['1', '1', '0', '1'],
    ['1', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
  ])
);
