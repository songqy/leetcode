/*
 * https://leetcode-cn.com/problems/champagne-tower/
 */


/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const towers = [];
  towers[0] = [poured];
  for (let i = 0; i < 100; ++i) {
    if (!towers[i]) break;
    for (let j = 0; j <= i; ++j) {
      if (towers[i][j] > 1) {
        if (!towers[i + 1]) towers[i + 1] = [];
        if (!towers[i + 1][j]) towers[i + 1][j] = 0;
        if (!towers[i + 1][j + 1]) towers[i + 1][j + 1] = 0;
        const half = (towers[i][j] - 1) / 2;
        towers[i + 1][j] += half;
        towers[i + 1][j + 1] += half;
        towers[i][j] = 1;
      }
    }
  }
  //   console.log(towers);
  if (!towers[query_row] || !towers[query_row][query_glass]) {
    return 0;
  }
  return towers[query_row][query_glass];
};


console.log(champagneTower(1, 1, 1));
console.log(champagneTower(2, 1, 1));
console.log(champagneTower(3, 3, 0));
console.log(champagneTower(4, 3, 0));
console.log(champagneTower(5, 3, 0));
console.log(champagneTower(7, 4, 0));
console.log(champagneTower(8, 4, 0));
console.log(champagneTower(15, 5, 0));
console.log(champagneTower(16, 5, 0));
console.log(champagneTower(31, 5, 0));
console.log(champagneTower(32, 5, 0));
console.log(champagneTower(64, 5, 0));
console.log(champagneTower(100, 17, 11));
console.log(champagneTower(100000009, 33, 17));
