//solution 1 - https://leetcode.com/submissions/detail/443716982/?from=explore&item_id=3240
var sortedSquares = function(nums) {
  nums.forEach((_,idx,arr) => {
      arr[idx] = arr[idx]**2
  })
  return nums.sort((a,b) => a-b)
};