/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (52.57%)
 * Likes:    1708
 * Dislikes: 0
 * Total Accepted:    245.6K
 * Total Submissions: 467.6K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 *
 *
 *
 * 实现 LRUCache 类：
 *
 *
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 *
 *
 *
 *
 *
 *
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 *
 *
 *
 * 示例：
 *
 *
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * 0
 * 最多调用 2 * 10^5 次 get 和 put
 *
 *
 */
// @lc code=start

var LinkedHashMap = function () {
  this.length = 0;
  this.leftNode = undefined;
  this.rightNode = undefined;
  this.linkedHash = {};
};

LinkedHashMap.prototype.get = function (key) {
  const node = this.linkedHash[key];
  if (node) return node.value;
  return undefined;
};

LinkedHashMap.prototype.remove = function (key) {
  const node = this.linkedHash[key];
  if (!node) return;
  if (node.prev !== undefined && node.next !== undefined) {
    this.linkedHash[node.prev].next = node.next;
    this.linkedHash[node.next].prev = node.prev;
  } else if (node.prev !== undefined) {
    this.linkedHash[node.prev].next = undefined;
    this.rightNode = node.prev;
  } else if (node.next !== undefined) {
    this.linkedHash[node.next].prev = undefined;
    this.leftNode = node.next;
  }
  delete this.linkedHash[key];
  this.length--;
};

LinkedHashMap.prototype.unshift = function () {
  this.remove(this.leftNode);
};

LinkedHashMap.prototype.insert = function (key, value, prevKey) {
  const prevNode = this.linkedHash[prevKey];
  if (prevNode) {
    const node = {
      value,
      prev: prevKey,
      next: prevNode.next,
    };
    if (prevNode.next !== undefined) {
      const nextNode = this.linkedHash[prevNode.next];
      nextNode.prev = key;
    } else {
      this.rightNode = key;
    }
    this.linkedHash[key] = node;
    prevNode.next = key;
  } else {
    const node = {
      value,
    };
    this.linkedHash[key] = node;
    this.rightNode = key;
    this.leftNode = key;
  }

  this.length++;
};

LinkedHashMap.prototype.push = function (key, value) {
  this.insert(key, value, this.rightNode);
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.linkedHashMap = new LinkedHashMap();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const value = this.linkedHashMap.get(key);
  if (value === undefined) return -1;
  this.linkedHashMap.remove(key);
  this.linkedHashMap.push(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.linkedHashMap.remove(key);
  this.linkedHashMap.push(key, value);
  if (this.linkedHashMap.length > this.capacity) {
    this.linkedHashMap.unshift();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCache.get(1)); // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.get(2)); // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCache.get(1)); // 返回 -1 (未找到)
// console.log(lRUCache.get(3)); // 返回 3
// console.log(lRUCache.get(4)); // 返回 4

// const l1 = new LRUCache(3);
// l1.put(1, 1);
// l1.put(1, 2);
// l1.put(2, 2);
// l1.put(2, 2);
// l1.put(2, 2);
// console.log(l1.get(1));
// l1.put(3, 3);
// l1.put(3, 8);
// l1.put(4, 4);
// console.log(l1.get(3));
// console.log(l1.get(2));
// l1.put(5, 5);
// l1.put(1, 1);
// console.log(l1.get(1));
