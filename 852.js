/*
 * https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  for (let i = 1; i < arr.length - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
};


console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
