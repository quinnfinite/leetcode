/*
OICE:

O: Array of arrays
I: Array of distinct integers
C:
E: empty array

Diagram
[1,2,3]

 1
/ \
2  3
/  \
3   3
[1,2,3], [1,3,2]

Pseudo
if input array is empty or has one item, return input array
results array

recursive function - arr
  if arr.length is equal to the length of the original input array
    push arr to results
    return

  for each item in the original array
    if item is not in arr
      //create copy of arr
      //push item to copy of arr
      recurse function on copy of arr

invoke([])
return results

*/

//Solution
var permute = function(nums) {
  var results = [];

  var findMutations = (arr) => {
    if (arr.length === nums.length) {
      results.push(arr);
      return;
    }
    for (var i = 0; i < nums.length; i++) {
      if(arr.indexOf(nums[i]) === -1) {
        var tempArr = arr.slice()
        tempArr.push(nums[i])
        findMutations(tempArr)
      }
    }
  }
  findMutations([])
  return results;
};

//Tests
console.log(permute([1]))