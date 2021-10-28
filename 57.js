/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Medium (41.21%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    88.8K
 * Total Submissions: 215.6K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 * 示例 3：
 *
 *
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 *
 *
 * 示例 4：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 *
 *
 * 示例 5：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * intervals[i].length == 2
 * 0
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let left = -1;
  let mergeStart = -1;
  for (let i = 0; i < intervals.length; ++i) {
    // console.log('mergeStart', mergeStart);

    if (
      left < 0 &&
      ((intervals[i][0] <= newInterval[0] &&
        intervals[i][1] >= newInterval[0]) ||
        (intervals[i][0] - 1 <= newInterval[1] &&
          intervals[i][1] >= newInterval[1]) ||
        (intervals[i][0] > newInterval[0] && intervals[i][1] < newInterval[1]))
    ) {
      mergeStart = i;
      left = Math.min(intervals[i][0], newInterval[0]);
    }

    if (left >= 0) {
      if (intervals[i][0] > newInterval[1]) {
        intervals.splice(mergeStart, i - mergeStart, [left, newInterval[1]]);
        return intervals;
      }
      if (intervals[i][1] >= newInterval[1]) {
        const right = Math.max(intervals[i][1], newInterval[1]);
        // console.log('right', right);
        intervals.splice(mergeStart, i + 1 - mergeStart, [left, right]);
        return intervals;
      }
      continue;
    }

    if (intervals[i][0] > newInterval[1]) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }
  }
  if (left >= 0) {
    intervals.splice(mergeStart, intervals.length - mergeStart, [
      left,
      newInterval[1],
    ]);
    return intervals;
  }
  intervals.push(newInterval);
  return intervals;
};
// @lc code=end

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );
// console.log(insert([], [5, 7]));
// console.log(insert([[1, 5]], [2, 3]));
// console.log(insert([[1, 5]], [2, 7]));
// console.log(insert([[1, 5]], [0, 6]));
