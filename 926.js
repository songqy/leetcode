/*
 * https://leetcode-cn.com/problems/flip-string-to-monotone-increasing/
*/


/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  function count(s) {
    return (s.match(/0/g) || []).length;
  }
  const len = S.length;
  const all0 = count(S);
  let ans = Math.min(len - all0, all0);

  let last0 = 0;
  for (let i = 0; i < len; ++i) {
    let left0;
    if (i === 0) {
      if (S[0] === '0') {
        left0 = 1;
      } else {
        left0 = 0;
      }
    } else {
      if (S[i] === '0') {
        left0 = last0 + 1;
      } else {
        left0 = last0;
      }
    }
    last0 = left0;
    const left1 = i + 1 - left0;
    const right0 = all0 - left0;
    // console.log(left0, left1, right0);
    ans = Math.min(ans, left1 + right0);
  }
  return ans;
};


console.log(minFlipsMonoIncr('01110'));
console.log(minFlipsMonoIncr('00110'));
console.log(minFlipsMonoIncr('010110'));
console.log(minFlipsMonoIncr('00011000'));
console.log(minFlipsMonoIncr('11011'));
console.log(minFlipsMonoIncr('0001010001'));
console.log(minFlipsMonoIncr('00000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001'));


