/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (55.30%)
 * Likes:    948
 * Dislikes: 0
 * Total Accepted:    129.4K
 * Total Submissions: 233.8K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 *
 *
 * 示例 2：
 *
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 *
 *
 * 示例 3：
 *
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 *
 *
 * 示例 4：
 *
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let str = '';
  let i = 0;
  while (i < s.length) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      str += s[i];
      i++;
    } else if (s[i] >= '0' && s[i] <= '9') {
      let end = i + 1;
      while (s[end] !== '[') {
        end++;
      }
      let num = +s.slice(i, end);
      const subStrStart = end + 1;
      i = end + 1;
      const stack = [];
      stack.push('[');
      while (stack.length > 0 && i < s.length) {
        // console.log('i', i, stack);
        if (s[i] === ']') {
          stack.pop();
        } else if (s[i] === '[') {
          stack.push('[');
        }
        i++;
      }
      // console.log('subStrStart', subStrStart, i);
      const subStr = decodeString(s.slice(subStrStart, i - 1));
      while (num--) {
        str += subStr;
      }
    }
  }
  return str;
};
// @lc code=end

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('abc3[cd]xyz'));
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')); // zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef
