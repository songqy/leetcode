/*
 * https://leetcode-cn.com/problems/search-suggestions-system/submissions/
 */

const fun1 = (products, searchWord) => {
  products.sort();
  const res = [];
  for (let i = 0; i < searchWord.length; ++i) {
    res[i] = [];
    const source = i > 0 ? res[i - 1] : products;
    for (let j = 0; j < source.length; ++j) {
      let start = -1;
      if (searchWord[i] === source[j][i]) {
        start = j;
        let end = source.length;
        for (let k = j + 1; k < source.length; ++k) {
          if (searchWord[i] !== source[k][i]) {
            end = k;
            break;
          }
        }
        res[i] = source.slice(start, end);
        break;
      }
    }
  }
  return res.map(val => val.slice(0, 3));
};

// 用字典树实现
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const fun2 = (products, searchWord) => {
  function createTrie(str) {
    const node = {
      name: str[0],
      res: [],
    };
    if (str.length > 1) {
      node.nextNode = createTrie(str.slice(1));
    }
    return node;
  }

  const trie = createTrie(searchWord);
  for (let i = 0; i < products.length; ++i) {
    let j = 0;
    let currentNode = trie;
    while (currentNode) {
      if (currentNode.name === products[i][j]) {
        currentNode.res.push(products[i]);
        currentNode.res = currentNode.res.sort().slice(0, 3);
        currentNode = currentNode.nextNode;
        j++;
      } else {
        break;
      }
    }
  }
  const res = [];
  let currentNode = trie;
  while (currentNode) {
    res.push(currentNode.res);
    currentNode = currentNode.nextNode;
  }
  return res;
};

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // return fun1(products, searchWord);
  return fun2(products, searchWord);
};


// const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
// const searchWord = 'mouse';

// const products = ['havana'], searchWord = 'havana';

const products = ['bags', 'baggage', 'banner', 'box', 'cloths'], searchWord = 'bags';

// const products = ['havana'], searchWord = 'tatiana';

const res = suggestedProducts(products, searchWord);
console.log(res);
