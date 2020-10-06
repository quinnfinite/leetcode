//https://leetcode.com/problems/shuffle-the-array/submissions/

var shuffle = function(nums, n) {
  var results = [];
  var midPoint = nums.length/2;
  for (var i = 0; i < midPoint; i++) {
      results.push(nums[i], nums[i+midPoint])
  }
  return results;
};