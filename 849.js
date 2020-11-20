/*
 * https://leetcode-cn.com/problems/maximize-distance-to-closest-person/
 */

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let start = -1;
  let maxLen = 0;
  for (let i = 0; i < seats.length; ++i) {
    if (seats[i] === 1) {
      let len;
      if (start >= 0) {
        len = Math.floor((i - start) / 2);
      } else {
        len = i;
      }
      maxLen = Math.max(maxLen, len);
      start = i;
    }
  }
  maxLen = Math.max(maxLen, seats.length - 1 - start);
  return maxLen;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]));
