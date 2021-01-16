//solution 1 - https://leetcode.com/submissions/detail/443716982/?from=explore&item_id=3240
var sortedSquares = function(nums) {
  nums.forEach((_,idx,arr) => {
      arr[idx] = arr[idx]**2
  })
  return nums.sort((a,b) => a-b)
};

//solution 2 - https://leetcode.com/submissions/detail/443718797/?from=explore&item_id=3240
var sortedSquares = function(nums) {
  for(let idx = 0; idx < nums.length; idx++) {
      nums[idx] = nums[idx]**2
  }
  return nums.sort((a,b) => a-b)
};