/*
 * https://leetcode-cn.com/problems/flood-fill/
 */


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const originalColor = image[sr][sc];
  const queue = [];
  const flag = [];
  for (let i = 0; i < image.length; ++i) {
    flag.push([]);
  }
  queue.push([sr, sc]);
  flag[sr][sc] = true;
  while (queue.length > 0) {
    const [i, j] = queue.shift();
    image[i][j] = newColor;
    if (i - 1 >= 0) {
      if (!flag[i - 1][j] && image[i - 1][j] === originalColor) {
        queue.push([i - 1, j]);
        flag[i][j] = true;
      }
    }
    if (i + 1 < image.length) {
      if (!flag[i + 1][j] && image[i + 1][j] === originalColor) {
        queue.push([i + 1, j]);
        flag[i][j] = true;
      }
    }
    if (j - 1 >= 0) {
      if (!flag[i][j - 1] && image[i][j - 1] === originalColor) {
        queue.push([i, j - 1]);
        flag[i][j] = true;
      }
    }
    if (j + 1 < image[0].length) {
      if (!flag[i][j + 1] && image[i][j + 1] === originalColor) {
        queue.push([i, j + 1]);
        flag[i][j] = true;
      }
    }
  }
  return image;
};


console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1));

