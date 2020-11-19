/*
 * https://leetcode-cn.com/problems/push-dominoes/
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  function formatStr(str) {
    // console.log('formatStr', str);
    if (str[0] === 'R' && str[str.length - 1] === '.') {
      return str.replace(/./g, 'R');
    } else if (str[0] === '.' && str[str.length - 1] === 'L') {
      return str.replace(/./g, 'L');
    } else if (str[0] === 'R' && str[str.length - 1] === 'L') {
      let newStr = '';
      const half = Math.floor(str.length / 2);
      for (let i = 0; i < half; ++i) {
        newStr += 'R';
      }
      if (str.length % 2 !== 0) {
        newStr += '.';
      }
      for (let i = 0; i < half; ++i) {
        newStr += 'L';
      }
      return newStr;
    }
    return str;
  }
  let ans = '';
  let start = 0;
  for (let i = 0; i < dominoes.length; ++i) {
    if (dominoes[i] === 'L') {
      ans += formatStr(dominoes.slice(start, i + 1));
      start = i + 1;
    } else if (dominoes[i] === 'R') {
      ans += formatStr(dominoes.slice(start, i));
      start = i;
    }
  }
  if (start < dominoes.length) {
    ans += formatStr(dominoes.slice(start, dominoes.length));
  }
  return ans;
};


console.log(pushDominoes('.L.R...LR..L..'));
console.log(pushDominoes('RR.L'));
console.log(pushDominoes('L.L...L.L.LL.L..L...'));
