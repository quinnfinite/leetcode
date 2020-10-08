// https://leetcode.com/problems/number-of-good-pairs/submissions/
var numIdenticalPairs = function(nums) {
  var count = 0;
  var numbers = {};
  for (var num of nums) {
   numbers[num] ? numbers[num]++ : numbers[num] = 1;
  }
  for (var number in numbers) {
      count += numbers[number] * ((numbers[number]-1) * (0.5))
  }
  return count
};

//Slightly faster??? according to leetcode, time complexity looks like n log n
//https://leetcode.com/problems/number-of-good-pairs/submissions/
var numIdenticalPairs = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if(nums[i] === nums[j]) count++
    }
  }
  return count
};

//Solution 3 - https://leetcode.com/problems/number-of-good-pairs/submissions/
var numIdenticalPairs = function(nums) {
  return nums.reduce((acc, number, index) => {
    let count = 0;
    for(var i = index+1; i < nums.length; i++) {
      if(number === nums[i]) count++;
    }
    return acc += count;
  },0)
};


//#4
var numIdenticalPairs = function(nums) {
  var numberCount = {};
  var count = 0;
  for (var num of nums) {
      if(numberCount[num]) {
          count += numberCount[num];
          numberCount[num]++
      } else {
          numberCount[num] = 1;
      }
  }
  return count
};


//options
//use two for loops O(n^2)
//use reduce (w/a for loop inside) O(n^2)
//create object to store count of numbers O(2n) or O(n)
  //iterate over array to create obj
//[1,2,3,1,1,3,1,1,1,1]
// 0,3
// 0,4
// 0,6
// 0,7
// 3,4
// 3,6
// 3,7
// 4,6
// 4,7
// 6,7
// 10


// 0,3
// 0,4
// 0,6
// 0,7
// 0,8 - 5

// 3,4
// 3,6
// 3,7
// 3,8 - 4

// 4,6
// 4,7
// 4,8 - 3

// 6,7
// 6,8 - 2

// 7,8 - 1

// 0,3
// 0,4
// 0,6
// 0,7
// 0,8
// 0,9 - 6

// 3,4
// 3,6
// 3,7
// 3,8
// 3,9 - 5

// 4,6
// 4,7
// 4,8
// 4,9 - 4

// 6,7
// 6,8
// 6,9 - 3

// 7,8
// 7,9 - 2

// 8,7 - 1

// 21


// 2 -> 1
// 3 -> 3 - 2
// 4 -> 6 - 3
// 5 -> 10 - 4
// 6 -> 15 - 5
// 7 - ?21? - 6 - Confirmed

// or
// 2 x 0.5
// 3 x  1
// 4 x 1.5
// 5 x 2
// 6 x 2.5
// 7 x 3

// or n x (0.5 * n-1)


