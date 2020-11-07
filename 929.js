/*
 * https://leetcode-cn.com/problems/unique-email-addresses/
*/


/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const emailSet = new Set();
  for (let i = 0; i < emails.length; ++i) {
    const [s1, s2] = emails[i].split('@');
    emailSet.add(`${s1.replace(/\./g, '').replace(/\+.+/, '')}@${s2}`);
  }
  return emailSet.size;
};


const e = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];

console.log(numUniqueEmails(e));
