/*
 * https://leetcode-cn.com/problems/most-profit-assigning-work/
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const works = [];
  for (let i = 0; i < difficulty.length; ++i) {
    works[i] = { difficulty: difficulty[i], profit: profit[i] };
  }
  works.sort((a, b) => a.difficulty - b.difficulty);
  const maxProfit = [works[0].profit];
  for (let i = 1; i < difficulty.length; ++i) {
    maxProfit[i] = Math.max(maxProfit[i - 1], works[i].profit);
  }
  worker.sort((a, b) => a - b);
  //   console.log(works);
  //   console.log(maxProfit);
  //   console.log(worker);
  let ans = 0;
  let j = 0;
  for (let i = 0; i < worker.length; ++i) {
    while (j < works.length) {
      if (worker[i] < works[j].difficulty) {
        break;
      }
      if (worker[i] >= works[j].difficulty && (j + 1 >= works.length || worker[i] < works[j + 1].difficulty)) {
        ans += maxProfit[j];
        break;
      }
      j++;
    }
  }
  return ans;
};

function getData() {
  const difficulty = [];
  const profit = [];
  const worker = [];
  for (let i = 0; i < 10000; ++i) {
    difficulty.push(Math.floor(Math.random() * 100000));
    profit.push(Math.floor(Math.random() * 100000));
    worker.push(Math.floor(Math.random() * 100000));
  }

  return [difficulty, profit, worker];

}



const data1 = getData();

const data2 = [[64, 88, 97], [53, 86, 89], [98, 11, 6]];
const data3 = [
  [68, 35, 52, 47, 86],
  [67, 17, 1, 81, 3],
  [92, 10, 85, 84, 82],
];

const data4 = [
  [5, 50, 92, 21, 24, 70, 17, 63, 30, 53],
  [68, 100, 3, 99, 56, 43, 26, 93, 55, 25],
  [96, 3, 55, 30, 11, 58, 68, 36, 26, 1],
];


// const difficulty = [2, 4, 6, 8, 10], profit = [10, 20, 30, 40, 50], worker = [4, 5, 6, 7];
// console.log(maxProfitAssignment(difficulty, profit, worker));

console.log(maxProfitAssignment(...data1));
console.log(maxProfitAssignment(...data2));
console.log(maxProfitAssignment(...data3));
console.log(maxProfitAssignment(...data4));
