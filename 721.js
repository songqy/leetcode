/*
 * https://leetcode-cn.com/problems/accounts-merge/
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  Set.prototype.addList = function(arr) {
    arr.forEach(val => {
      this.add(val);
    });
  };
  Set.prototype.toArrary = function() {
    const arr = [];
    for (const value of this.values()) {
      arr.push(value);
    }
    return arr;
  };
  const resMap = new Map();
  for (let i = 0; i < accounts.length; ++i) {
    const res = resMap.get(accounts[i][0]);
    // console.log('res', accounts[i][0], res);
    const newAccounts = accounts[i].slice(1);
    if (res) {
      const sameIndex = [];
      res.forEach((accountSet, setIndex) => {
        for (let j = 1; j < accounts[i].length; ++j) {
          if (accountSet.has(accounts[i][j])) {
            sameIndex.push(setIndex);
            break;
          }
        }
      });
      if (sameIndex.length === 0) {
        res.push(new Set(newAccounts));
      } else if (sameIndex.length === 1) {
        res[sameIndex[0]].addList(newAccounts);
      } else {
        res[sameIndex[0]].addList(newAccounts);
        for (let j = 1; j < sameIndex.length; ++j) {
          const newIndex = sameIndex[j] - j + 1;
          res[sameIndex[0]].addList(res[newIndex].toArrary());
          res.splice(newIndex, 1);
        }
      }
    } else {
      resMap.set(accounts[i][0], [new Set(newAccounts)]);
    }
  }
  //   console.log('resMap', resMap);
  const ans = [];
  for (const [name, setList] of resMap.entries()) {
    setList.forEach(itemSet => {
      ans.push([name, ...itemSet.toArrary().sort()]);
    });
  }
  return ans;
};


const accounts = [
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com', 'johnnybravo@mail.com'],
  ['Mary', 'mary@mail.com']];
console.log(accountsMerge(accounts));

const accounts2 = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com'],
];
console.log(accountsMerge(accounts2));

const accounts3 = [
  ['Alex', 'Alex5@m.co', 'Alex4@m.co', 'Alex0@m.co'],
  ['Ethan', 'Ethan3@m.co', 'Ethan3@m.co', 'Ethan0@m.co'],
  ['Kevin', 'Kevin4@m.co', 'Kevin2@m.co', 'Kevin2@m.co'],
  ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe2@m.co'],
  ['Gabe', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe2@m.co'],
];

console.log(accountsMerge(accounts3));
