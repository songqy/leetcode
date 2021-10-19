/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (46.88%)
 * Likes:    1144
 * Dislikes: 0
 * Total Accepted:    310.4K
 * Total Submissions: 660K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * intervals[i].length == 2
 * 0 i i
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let isMerge = false;
  const ans = [];
  for (let i = 0; i < intervals.length; ++i) {
    let insert = false;
    for (let j = 0; j < ans.length; ++j) {
      if (intervals[i][0] >= ans[j][0] && intervals[i][0] <= ans[j][1]) {
        ans[j][1] = Math.max(ans[j][1], intervals[i][1]);
        insert = true;
        isMerge = true;
      } else if (intervals[i][1] >= ans[j][0] && intervals[i][1] <= ans[j][1]) {
        ans[j][0] = Math.min(ans[j][0], intervals[i][0]);
        insert = true;
        isMerge = true;
      } else if (intervals[i][0] < ans[j][0] && intervals[i][1] > ans[j][1]) {
        ans[j] = intervals[i];
        insert = true;
        isMerge = true;
      }
    }
    if (!insert) {
      ans.push(intervals[i]);
    }
  }
  return isMerge ? merge(ans) : ans;
};
// @lc code=end

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
    [1, 5],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 9],
    [1, 2],
    [11, 13],
  ])
);

console.log(
  merge([
    [1, 4],
    [0, 5],
  ])
);

console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);

console.log(
  merge([
    [2, 3],
    [4, 6],
    [5, 7],
    [3, 4],
  ])
);
