/*
 * https://leetcode-cn.com/problems/short-encoding-of-words/
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  // s2是s1的子字符串
  function isSubString(s1, s2) {
    if (s1.length < s2.length) return false;
    let i = s1.length - 1;
    let j = s2.length - 1;
    while (i >= 0 && j >= 0) {
      if (s1[i] !== s2[j]) return false;
      i--;
      j--;
    }
    return true;
  }
  const res = [];
  words.forEach(word => {
    let flag = true;
    for (let i = 0; i < res.length; ++i) {
      if (isSubString(word, res[i])) {
        flag = false;
        res[i] = word;
        break;
      } else if (isSubString(res[i], word)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(word);
    }
  });
  return res.reduce((acc, cur) => acc + cur.length, 0) + res.length;
};

const words = ['time', 'me', 'bell'];
console.log(minimumLengthEncoding(words));
