/*
 * https://leetcode-cn.com/problems/my-calendar-ii/
 */

var MyCalendarTwo = function() {
  this.list = [];
  this.repeatList = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
//   console.log('list', this.list);
//   console.log('repeatList', this.repeatList);
  for (let i = 0; i < this.repeatList.length; ++i) {
    const [_start, _end] = this.repeatList[i];
    if (!(end <= _start || start >= _end)) return false;
  }
  let insertIndex = -1;
  for (let i = 0; i < this.list.length; ++i) {
    const [_start, _end] = this.list[i];
    if (insertIndex < 0 && (_start < start || (_start === start && _end >= end))) {
      insertIndex = i;
    }
    const repeatStart = Math.max(_start, start);
    const repeatEnd = Math.min(_end, end);
    if (repeatStart < repeatEnd) {
      this.repeatList.push([repeatStart, repeatEnd]);
    }
  }
  this.list.splice(insertIndex, 0, [start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

var obj = new MyCalendarTwo();
console.log(obj.book());
console.log(obj.book(10, 20));
console.log(obj.book(50, 60));
console.log(obj.book(10, 40));
console.log(obj.book(5, 15));
console.log(obj.book(5, 10));
console.log(obj.book(25, 55));
console.log(obj.book(15, 20));
