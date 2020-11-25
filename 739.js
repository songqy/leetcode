/*
 * https://leetcode-cn.com/problems/daily-temperatures/
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const ans = [];
  const list = [];
  for (let i = 0; i < T.length; ++i) {
    let j = list.length - 1;
    while (j >= 0) {
      const tmpIndex = list[j];
      if (T[tmpIndex] < T[i]) {
        ans[tmpIndex] = i - tmpIndex;
        list.splice(j, 1);
        --j;
      } else {
        break;
      }
    }
    list.push(i);
    ans.push(0);
  }
  return ans;
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
