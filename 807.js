/*
 * https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const rowMax = [], colMax = [];
  for (let i = 0; i < grid.length; ++i) {
    rowMax[i] = Math.max(...grid[i]);
    colMax[i] = 0;
    for (let j = 0; j < grid.length; ++j) {
      colMax[i] = Math.max(colMax[i], grid[j][i]);
    }
  }
  let ans = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid.length; ++j) {
      const maxHeight = Math.min(rowMax[i], colMax[j]);
      ans += (maxHeight - grid[i][j]);
    }
  }
  return ans;
};


const grid1 = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];
console.log(maxIncreaseKeepingSkyline(grid1));
