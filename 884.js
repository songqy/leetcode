/*
 * https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const arr1 = A.split(' ');
  const arr2 = B.split(' ');
  const map = new Map();
  arr1.forEach(s => {
    map.set(s, (map.get(s) || 0) + 1);
  });
  arr2.forEach(s => {
    map.set(s, (map.get(s) || 0) + 1);
  });

  const ans = [];
  for (const k of map.keys()) {
    if (map.get(k) === 1) {
      ans.push(k);
    }
  }
  return ans;
};



console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
