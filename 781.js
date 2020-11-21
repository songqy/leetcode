/*
 * https://leetcode-cn.com/problems/rabbits-in-forest/
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let ans = 0;
  const count = [];
  for (let i = 0; i < answers.length; ++i) {
    if (count[answers[i]]) count[answers[i]]++;
    else count[answers[i]] = 1;
  }

  for (let i = 0; i <= 999; ++i) {
    if (count[i]) {
      ans += Math.ceil(count[i] / (i + 1)) * (i + 1);
    }
  }

  return ans;
};


console.log(numRabbits([1, 1, 2]));
console.log(numRabbits([10, 10, 10]));
console.log(numRabbits([1, 0, 1, 0, 0]));
