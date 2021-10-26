/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (53.32%)
 * Likes:    455
 * Dislikes: 0
 * Total Accepted:    229.1K
 * Total Submissions: 427.7K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 *
 *
 * 示例：
 *
 * s = "leetcode"
 * 返回 0
 *
 * s = "loveleetcode"
 * 返回 2
 *
 *
 *
 *
 * 提示：你可以假定该字符串只包含小写字母。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  const indexObj = {};
  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]]) {
      if (s[i] in indexObj) {
        delete indexObj[s[i]];
      }
    } else {
      obj[s[i]] = true;
      indexObj[s[i]] = i;
    }
  }
  const arr = Object.values(indexObj);
  if (arr.length === 0) return -1;
  return Math.min(...arr);
};
// @lc code=end

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aankdla'));
console.log(firstUniqChar('aabb'));
console.log(firstUniqChar('aadadaad'));
