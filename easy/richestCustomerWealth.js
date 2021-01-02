// problem - https://leetcode.com/problems/richest-customer-wealth/submissions/
var sum = (account) => {
  return account.reduce(
      (acc, num) => {
          return acc+num
      }, 0)
}


var maximumWealth = function(accounts) {
  let richest = 0;
  accounts.forEach((account) => {
      const acctSum = sum(account)
      if(acctSum > richest) richest = acctSum
  })
  return richest
};