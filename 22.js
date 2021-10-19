/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.26%)
 * Likes:    2097
 * Dislikes: 0
 * Total Accepted:    361.1K
 * Total Submissions: 467.4K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const queue = [];
  for (let i = 0; i < n - 1; ++i) {
    queue.push('(');
  }

  function getList(q, s, a) {
    const ans = [];
    // '('
    if (q.length > 0) {
      const _ans = getList(
        q.slice(0, q.length - 1),
        [...s, ')'],
        a.map((v) => `${v}(`)
      );
      ans.push(..._ans);
    }
    if (s.length > 0) {
      const _ans = getList(
        q,
        s.slice(0, s.length - 1),
        a.map((v) => `${v})`)
      );
      ans.push(..._ans);
    }
    return ans.length > 0 ? ans : a;
  }
  return getList(queue, [')'], ['(']);
};
// @lc code=end

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
console.log(generateParenthesis(8));
