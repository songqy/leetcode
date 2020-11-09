/*
 * https://leetcode-cn.com/problems/validate-stack-sequences/
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = [];
  let i = 0, j = 0;
  for (i; i < pushed.length; ++i) {
    stack.push(pushed[i]);
    while (j < popped.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return j === popped.length;
};


const pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1];
console.log(validateStackSequences(pushed, popped));
