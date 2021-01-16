const findMaxConsecutiveOnes = function(nums){
  let max = 0;
  let currentCount = 0;
  for (var num of nums) {
    if (num === 1) {
      currentCount++
      if(currentCount > max) max = currentCount
    }else{
      currentCount = 0;
    }
  }
  return max;
}