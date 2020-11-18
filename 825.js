/*
 * https://leetcode-cn.com/problems/friends-of-appropriate-ages/
 */

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  let res = 0;
  const count = [];
  for (let i = 0; i < ages.length; ++i) {
    if (count[ages[i]])count[ages[i]]++;
    else count[ages[i]] = 1;
  }
  for (let i = 15; i <= 120; ++i) {
    if (count[i]) {
      res += count[i] * (count[i] - 1);
      const maxA = Math.min(121, (i - 7) * 2);
      for (let j = i + 1; j < maxA; ++j) {
        if (count[j]) {
          res += count[j] * count[i];
        }
      }
    }
  }
  return res;
};


function getAges() {
  const a = [];
  for (let i = 0; i < 20000; i++) {
    a.push(Math.floor(Math.random() * 120) + 1);
  }
  return a;
}

const ages1 = getAges();

console.log(numFriendRequests([16, 16]));
console.log(numFriendRequests([16, 17, 18]));
console.log(numFriendRequests([20, 30, 100, 110, 120]));


console.log(numFriendRequests(ages1));
