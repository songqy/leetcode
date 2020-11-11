/*
 * https://leetcode-cn.com/problems/boats-to-save-people
 */


/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let ans = 0;
  let i = 0, j = people.length - 1;
  while (i <= j) {
    ans++;
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
  }
  return ans;
};



console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50));


