/*
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */


/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = {};
  this.prefixMap = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let addValue = val;
  if (this.map[key]) {
    const oldValue = this.map[key];
    addValue -= oldValue;
  }
  for (let i = 1; i <= key.length; ++i) {
    const _key = key.slice(0, i);
    if (!this.prefixMap[_key]) {
      this.prefixMap[_key] = 0;
    }
    this.prefixMap[_key] += addValue;
  }
  this.map[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  return this.prefixMap[prefix] || 0;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var obj = new MapSum();
obj.insert('apple', 3);
console.log(obj.sum('ap'));
obj.insert('app', 2);
console.log(obj.sum('ap'));
