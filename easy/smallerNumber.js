// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/
var smallerNumbersThanCurrent = function(nums) {
  return nums.map((num) => {
      var count = 0;
      nums.forEach((number) => {
          if(number < num) count++
      })
      return count;
  })
};

//solution 2
var smallerNumbersThanCurrent = function(nums) {
  var results = [];

  for (var num of nums) {
      var count = 0;
      for (var number of nums) {
          if(num > number) count++
      }
      results.push(count);
  }

  return results;
};