/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

const digitMaps = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || digits.length === 0) return [];
  const ans = [];
  const str = digitMaps[digits[0]];
  const nextAns = letterCombinations(digits.slice(1));
  if (nextAns.length === 0) return str.split('');
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < nextAns.length; ++j) {
      ans.push(str[i] + nextAns[j]);
    }
  }
  return ans;
};
// @lc code=end

console.log(letterCombinations('3'));
console.log(letterCombinations('73'));
console.log(letterCombinations('249'));
