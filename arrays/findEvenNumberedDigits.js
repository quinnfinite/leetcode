// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/
var findNumbers = function(nums) {
  let count = 0;
  for (let num of nums) {
      let digits = 0;
      while(num > 0) {
          digits++
          num = (num - num % 10) / 10
      }
      if(digits % 2 === 0) count++
  }
  return count
};