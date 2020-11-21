/*
 * https://leetcode-cn.com/problems/letter-case-permutation/
 */


const numberStr = '1234567890';
function isNumber(s) {
  return numberStr.includes(s);
}

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  if (!S) return [];
  const ans = [];
  if (S.length === 1) {
    if (isNumber(S[0])) {
      ans.push(S[0]);
    } else {
      ans.push(S[0].toLowerCase());
      ans.push(S[0].toUpperCase());
    }
  } else {
    const arr = letterCasePermutation(S.slice(1));
    // console.log('arr', arr);
    for (let i = 0; i < arr.length; ++i) {
      if (isNumber(S[0])) {
        ans.push(`${S[0]}${arr[i]}`);
      } else {
        ans.push(`${S[0].toLowerCase()}${arr[i]}`);
        ans.push(`${S[0].toUpperCase()}${arr[i]}`);
      }
    }
  }
  return ans;
};



console.log(letterCasePermutation('a1b2'));
console.log(letterCasePermutation('3z4'));
console.log(letterCasePermutation('12345'));
console.log(letterCasePermutation('12345Kf9o'));
