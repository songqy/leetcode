/*
 * https://leetcode-cn.com/problems/shortest-bridge/
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  function getNum(i, j) {
    if (!A[i]) return false;
    return A[i][j];
  }
  function is1(i, j, seen) {
    return getNum(i, j) && !seen[i][j];
  }
  function is0(i, j, seen) {
    return getNum(i, j) === 0 && !seen[i][j];
  }
  const seen = [];
  for (let i = 0; i < A.length; ++i) {
    seen.push([]);
  }
  // 首先深度优先遍历找出第一个连通图
  const stack = [];
  for (let i = 0; i < A.length; ++i) {
    for (let j = 0; j < A.length; ++j) {
      if (A[i][j]) {
        const queue = [];
        seen[i][j] = true;
        stack.push([i, j]);
        while (stack.length > 0) {
          const [_i, _j] = stack.pop();
          if (is1(_i + 1, _j, seen)) {
            seen[_i + 1][_j] = true;
            stack.push([_i + 1, _j]);
          }
          if (is1(_i - 1, _j, seen)) {
            seen[_i - 1][_j] = true;
            stack.push([_i - 1, _j]);
          }
          if (is1(_i, _j + 1, seen)) {
            seen[_i][_j + 1] = true;
            stack.push([_i, _j + 1]);
          }
          if (is1(_i, _j - 1, seen)) {
            seen[_i][_j - 1] = true;
            stack.push([_i, _j - 1]);
          }
          if (getNum(_i + 1, _j) === 0 || getNum(_i - 1, _j) === 0 || getNum(_i, _j + 1) === 0 || getNum(_i, _j - 1) === 0) {
            queue.push([_i, _j, 0]);
          }
        }

        // console.log(seen);

        // 广度优先遍历，找出与第二个图的最短距离
        let ans = Infinity;
        while (queue.length > 0) {
          // console.log('queue', queue);
          const [_i, _j, degree] = queue[0];
          queue.splice(0, 1);
          if (is0(_i + 1, _j, seen)) {
            seen[_i + 1][_j] = true;
            queue.push([_i + 1, _j, degree + 1]);
          }
          if (is0(_i - 1, _j, seen)) {
            seen[_i - 1][_j] = true;
            queue.push([_i - 1, _j, degree + 1]);
          }
          if (is0(_i, _j + 1, seen)) {
            seen[_i][_j + 1] = true;
            queue.push([_i, _j + 1, degree + 1]);
          }
          if (is0(_i, _j - 1, seen)) {
            seen[_i][_j - 1] = true;
            queue.push([_i, _j - 1, degree + 1]);
          }

          if (is1(_i + 1, _j, seen)) {
            ans = Math.min(ans, degree);
          }
          if (is1(_i - 1, _j, seen)) {
            ans = Math.min(ans, degree);
          }
          if (is1(_i, _j + 1, seen)) {
            ans = Math.min(ans, degree);
          }
          if (is1(_i, _j - 1, seen)) {
            ans = Math.min(ans, degree);
          }
        }

        return ans;
      }
    }
  }
};


const A1 = [[0, 1, 0], [0, 0, 0], [0, 0, 1]];
const A2 = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]];
const A3 = [[0, 0, 1, 0, 1], [0, 1, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

console.log(shortestBridge(A1));
console.log(shortestBridge(A2));
console.log(shortestBridge(A3));
