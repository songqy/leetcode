/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (51.68%)
 * Likes:    1226
 * Dislikes: 0
 * Total Accepted:    205.2K
 * Total Submissions: 396.8K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典，判定 s 是否可以由空格拆分为一个或多个在字典中出现的单词。
 *
 * 说明：拆分时可以重复使用字典中的单词。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 *
 *
 * 示例 2：
 *
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 * 注意你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s 和 wordDict[i] 仅有小写英文字母组成
 * wordDict 中的所有字符串 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (str, wordDict) {
  const cache = {};
  const check = (s) => {
    if (s in cache) return cache[s];
    for (let i = 1; i <= s.length; ++i) {
      const left = s.slice(0, i);
      if (wordDict.includes(left) && (i === s.length || check(s.slice(i)))) {
        cache[s] = true;
        return true;
      }
    }
    cache[s] = false;
    return false;
  };
  return check(str);
};
// @lc code=end

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(
  wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', [
    'a',
    'aaa',
    'aa',
    'aaaaaa',
    'aaaaaaaa',
  ])
);
