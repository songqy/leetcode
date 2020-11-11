/*
 * https://leetcode-cn.com/problems/prime-palindrome/
 */

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  function isPalindrome(num) {
    const s = num.toString();
    let i = 0, j = s.length - 1;
    while (i <= j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  function isPrimse2(num) {
    const max = Math.sqrt(num);
    for (let i = 3; i <= max; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function isPrimse(num) {
    if (num === 1 || num === 0) return false;
    if (num === 2 || num === 3 || num === 5) return true;
    if (num % 2 === 0) return false;
    const n6 = num % 6;
    if (n6 === 2 || n6 === 3 || n6 === 4) return false;
    return isPrimse2(num);
  }

  const maxNum = 2 * Math.pow(10, 8);
  let i = N;
  for (i; i <= maxNum; ++i) {
    if (i >= 6 && i % 6 === 1) break;
    if (isPalindrome(i) && isPrimse(i)) {
      return i;
    }
  }
  while (i <= maxNum) {
    // 遍历后面的数据得出的规律，不然会超时
    if (i > 10000000 && i < 100030001) i = 100030001;
    else if (i > 100000 && i < 1003001) i = 1003001;
    else if (i > 1000 && i < 10301) i = 10301;
    if (isPalindrome(i) && isPrimse2(i)) {
      return i;
    }
    i += 4;
    if (isPalindrome(i) && isPrimse2(i)) {
      return i;
    }
    i += 2;
  }
};

console.log(primePalindrome(1215122));
console.log(primePalindrome(85709140));
// for (let i = 1020; i < 100000; i += 10000) {
//   console.log(i, primePalindrome(i));
// }

// console.log(primePalindrome(12));
