var smallerNumbersThanCurrent = function(nums) {
  return nums.map((num) => {
      var count = 0;
      nums.forEach((number) => {
          if(number < num) count++
      })
      return count;
  })
};