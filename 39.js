/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (72.76%)
 * Likes:    1578
 * Dislikes: 0
 * Total Accepted:    341.6K
 * Total Submissions: 469.4K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target
 * 的唯一组合。
 *
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。
 *
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: candidates = [2,3,6,7], target = 7
 * 输出: [[7],[2,2,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入: candidates = [2,3,5], target = 8
 * 输出: [[2,2,2,2],[2,3,3],[3,5]]
 *
 * 示例 3：
 *
 *
 * 输入: candidates = [2], target = 1
 * 输出: []
 *
 *
 * 示例 4：
 *
 *
 * 输入: candidates = [1], target = 1
 * 输出: [[1]]
 *
 *
 * 示例 5：
 *
 *
 * 输入: candidates = [1], target = 2
 * 输出: [[1,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * candidate 中的每个元素都是独一无二的。
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const min = candidates[0];
  const cached = {};
  for (let i = 0; i < candidates.length; ++i) {
    const num = candidates[i];
    cached[num] = [{ [num]: 1 }];
  }

  const isObjEqual = (obj1, obj2) => {
    for (const k in obj1) {
      if (obj1[k] !== obj2[k]) return false;
    }
    return true;
  };

  const join = (list1, list2) => {
    const ans = [];
    for (let i = 0; i < list1.length; ++i) {
      for (let j = 0; j < list2.length; ++j) {
        const obj = { ...list1[i] };
        for (const n in list2[j]) {
          if (obj[n]) {
            obj[n] += list2[j][n];
          } else {
            obj[n] = list2[j][n];
          }
        }
        if (!ans.find((v) => isObjEqual(v, obj))) {
          ans.push(obj);
        }
      }
    }
    return ans;
  };

  const getSumList = (num) => {
    const ans = [];
    for (let i = min; i < num; ++i) {
      const j = num - i;
      if (cached[i] && cached[j]) {
        const newAns = join(cached[i], cached[j]);
        for (const obj of newAns) {
          if (!ans.find((v) => isObjEqual(v, obj))) {
            ans.push(obj);
          }
        }
      }
    }
    if (ans.length) {
      if (cached[num]) {
        for (const obj of ans) {
          if (!cached[num].find((v) => isObjEqual(v, obj))) {
            cached[num].push(obj);
          }
        }
      } else {
        cached[num] = ans;
      }
    }
  };

  for (let i = min + 1; i <= target; ++i) {
    getSumList(i);
  }

  const getArr = (obj) => {
    const arr = [];
    for (const n in obj) {
      const num = Number(n);
      for (let i = 0; i < obj[n]; ++i) {
        arr.push(num);
      }
    }
    return arr;
  };

  // console.log('cached[target]', cached[target]);

  const ans = [];
  if (cached[target]) {
    for (const obj of cached[target]) {
      const arr = getArr(obj);
      ans.push(arr);
    }
  }
  return ans;
};
// @lc code=end

// console.log(combinationSum([2, 3, 6, 7], 7));
// console.log(combinationSum([1], 2));
// console.log(combinationSum([2], 1));
console.log(combinationSum([2, 3, 5], 8));
