/*
 * https://leetcode-cn.com/problems/stone-game/
 */

// 使用递归实现，不过结果都是返回true的，因为总是先手的赢

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  const resMap = {};
  function getMaxNum(start, end) {
    const k = `${start}_${end}`;
    if (resMap[k]) return resMap[k];
    if (start + 2 === end) {
      const res = Math.max(piles[start], piles[start + 1]);
      resMap[k] = res;
      return res;
    }
    const left2 = getMaxNum(start + 2, end);
    const right2 = getMaxNum(start, end - 2);
    const middle = getMaxNum(start + 1, end - 1);
    // 选前面
    const n1 = Math.min(left2, middle);

    // 选后面
    const n2 = Math.min(right2, middle);

    const res = Math.max(n1 + piles[start], n2 + piles[end - 1]);
    resMap[k] = res;
    return res;
  }

  const maxNum = getMaxNum(0, piles.length);
  const totalNum = piles.reduce((acc, cur) => acc + cur, 0);
  return maxNum > totalNum / 2;
};


console.log(stoneGame([5, 3, 4, 5]));
console.log(stoneGame([5, 3, 4, 19, 5, 5]));

const p1 = [7, 7, 12, 16, 41, 48, 41, 48, 11, 9, 34, 2, 44, 30, 27, 12, 11, 39, 31, 8, 23, 11, 47, 25, 15, 23, 4, 17, 11, 50, 16, 50, 38, 34, 48, 27, 16, 24, 22, 48, 50, 10, 26, 27, 9, 43, 13, 42, 46, 24];
console.log(stoneGame(p1));
