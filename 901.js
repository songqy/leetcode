/*
 * https://leetcode-cn.com/problems/online-stock-span/
 */


var StockSpanner = function() {
  this.arr = [];
  this.span = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  if (this.arr.length === 0) {
    this.arr.push(price);
    this.span.push(1);
    return 1;
  }
  let curIndex = this.arr.length - 1;
  while (this.arr[curIndex] <= price) {
    curIndex = curIndex - this.span[curIndex];
  }

  const num = this.arr.length - curIndex;
  this.span.push(num);
  this.arr.push(price);
  return num;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


const p = [100, 80, 60, 70, 60, 75, 85];

const stockSpanner = new StockSpanner();
for (let i = 0; i < p.length; ++i) {
  console.log(stockSpanner.next(p[i]));
}
