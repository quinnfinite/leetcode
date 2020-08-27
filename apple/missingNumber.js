/*
OICE:

O: Number - Missing
I: Array of Numbers
C: Must be in linear time
E: does it always start with 0?

Diagram
[3,0,1] - sum should be n(n+1)/2 - 6
length is 3

[9,6,4,2,3,5,7,0,1] - length is 9 - sum should be 10(10+1)/2 = 55 
55 - sum of arr = 8

Pseudo
var to hold expected sum
iterate over the array
    //subtract each item from sum and set sum to the result
return sum
*/

//Solution
var missingNumber = function(nums) {
  var sum = nums.length*(nums.length+1)/2
  nums.forEach((num) => sum -= num)
  return sum  
};


//Tests
console.log(missingNumber([3,0,1]))