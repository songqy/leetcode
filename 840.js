/*
 * https://leetcode-cn.com/problems/magic-squares-in-grid/
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  function judge(arr) {
    // console.log('arr', arr);
    return arr.reduce((acc, cur) => acc + cur, 0) === 15;
  }

  function isAllUnique(arr) {
    const count = [];
    arr.forEach(val => {
      if (count[val]) count[val]++;
      else count[val] = 1;
    });
    for (let i = 1; i <= 9; ++i) {
      if (count[i] !== 1) return false;
    }
    return true;
  }

  let ans = 0;
  for (let i = 0; i < grid[0].length - 2; ++i) {
    for (let j = 0; j < grid.length - 2; ++j) {
      const row1 = grid[j].slice(i, i + 3);
      if (!judge(row1)) continue;
      const row2 = grid[j + 1].slice(i, i + 3);
      if (!judge(row2)) continue;
      const row3 = grid[j + 2].slice(i, i + 3);
      if (!judge(row3)) continue;
      if (!judge([grid[j][i], grid[j + 1][i], grid[j + 2][i]])) continue;
      if (!judge([grid[j][i + 1], grid[j + 1][i + 1], grid[j + 2][i + 1]])) continue;
      if (!judge([grid[j][i + 2], grid[j + 1][i + 2], grid[j + 2][i + 2]])) continue;
      if (!judge([grid[j][i], grid[j + 1][i + 1], grid[j + 2][i + 2]])) continue;
      if (!judge([grid[j][i + 2], grid[j + 1][i + 1], grid[j + 2][i]])) continue;
      if (!isAllUnique([...row1, ...row2, ...row3])) continue;

      ans++;
    }
  }
  return ans;
};


const grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];

const grid2 = [
  [3, 2, 9, 2, 7],
  [6, 1, 8, 4, 2],
  [7, 5, 3, 2, 7],
  [2, 9, 4, 9, 6],
  [4, 3, 8, 2, 5],
];

console.log(numMagicSquaresInside(grid));
console.log(numMagicSquaresInside(grid2));
