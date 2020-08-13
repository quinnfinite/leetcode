// LeetCode Problem - https://leetcode.com/problems/two-sum/solution/
var twoSum = function(nums, target) {
    var numHash = {};
    for(var num = 0; num < nums.length; num++) {
        
       //to find the second number to look for -> target - nums[num];

        if(numHash[target - nums[num]] >= 0) return [numHash[target - nums[num]], num]
        numHash[nums[num]] = num;

    }
        
};

var numArr = [3,2,4];
var numTarget = 6;

var secondArr = [2,7,11,15]
var secondTarget = 9

//[1,2]

console.log(twoSum(numArr, numTarget))
console.log(twoSum(secondArr, secondTarget))



//Solution 1 - O(n^2) complexity
// var twoSum = function(nums, target) {
    
//     for (var first = 0; first < nums.length; first++) {
//         for(var second = 0; second < nums.length; second++) {
//             if (first !== second && nums[first] + nums[second] === target) return [first, second]
//         }
//     }
    
// };


// Solution 2 - O(n) time complexity
// var twoSum = function(nums, target) {
//     var numHash = {};
//     for(var num = 0; num < nums.length; num++) {
//         var secondNum = target - nums[num];
//         if(numHash[secondNum] >= 0) return [numHash[secondNum], num]
//         numHash[nums[num]] = num;

//     }
        
// };

// Solution 3 - O(n) complexity

// var twoSum = function(nums, target) {
//     var numHash = {};
//     for(var num = 0; num < nums.length; num++) {
        
//        //to find the second number to look for -> target - nums[num];

//         if(numHash[target - nums[num]] >= 0) return [numHash[target - nums[num]], num]
//         numHash[nums[num]] = num;

//     }
        
// };