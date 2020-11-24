/*
 * https://leetcode-cn.com/problems/escape-the-ghosts/
 */

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  const minStep = Math.abs(target[0]) + Math.abs(target[1]);
  //   console.log(minStep);
  for (let i = 0; i < ghosts.length; ++i) {
    const s = Math.abs(target[0] - ghosts[i][0]) + Math.abs(target[1] - ghosts[i][1]);
    if (s <= minStep) {
      return false;
    }
  }
  return true;
};


console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1]));
