//https://leetcode.com/problems/running-sum-of-1d-array/submissions/
var runningSum = function(nums) {
  var results = [];
  var runningSum = 0;
  for (var num = 0; num < nums.length; num++) {
      runningSum+=nums[num]
      results.push(runningSum)
  }
  return results;
};