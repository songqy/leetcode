/*
 * https://leetcode-cn.com/problems/reveal-cards-in-increasing-order/
*/


/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);
  //   console.log('deck', deck);
  const ans = [];
  while (deck.length > 0) {
    if (ans.length > 0) {
      const t = ans.pop();
      ans.unshift(t);
    }
    const card = deck.pop();
    ans.unshift(card);
  }
  return ans;
};

const deck1 = [17, 13, 11, 2, 3, 5, 7];

console.log(deckRevealedIncreasing(deck1));
