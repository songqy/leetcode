/*
 * https://leetcode-cn.com/problems/is-graph-bipartite/
 */


/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const groups = [];
  const stack = [];
  for (let i = 0; i < graph.length; ++i) {
    if (graph[i].length > 0 && !groups[i]) {
      groups[i] = 1;
      stack.push({ node: i, group: 1 });
      while (stack.length > 0) {
        const { node, group } = stack.pop();
        for (let j = 0; j < graph[node].length; ++j) {
          const nextNode = graph[node][j];
          if (!groups[nextNode]) {
            groups[nextNode] = group === 1 ? 2 : 1;
            stack.push({ node: nextNode, group: groups[nextNode] });
          } else if (groups[nextNode] === group) {
            return false;
          }
        }
      }
    }
  }
  return true;
};


const g1 = [[1, 3], [0, 2], [1, 3], [0, 2]];
const g2 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];

console.log(isBipartite(g1));
console.log(isBipartite(g2));
