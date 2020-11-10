/*
 * https://leetcode-cn.com/problems/reorder-data-in-log-files/
*/


/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {

  function isNumberLog(s) {
    return !!s.match(/[0-9]/);
  }

  const numberLogs = [];
  const stringLogs = [];
  for (let i = 0; i < logs.length; ++i) {
    const blankIndex = logs[i].indexOf(' ');
    if (isNumberLog(logs[i][blankIndex + 1])) {
      numberLogs.push(logs[i]);
    } else {
      stringLogs.push(logs[i]);
    }
  }

  stringLogs.sort((a, b) => {
    const s1 = a.slice(a.indexOf(' ') + 1);
    const s2 = b.slice(b.indexOf(' ') + 1);
    // console.log('s1', s1);
    // console.log('s2', s2);
    if (s1 === s2) {
      return a.localeCompare(b);
    }
    return s1.localeCompare(s2);
  });

  return [...stringLogs, ...numberLogs];
};


const logs = ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'];
console.log(reorderLogFiles(logs));
