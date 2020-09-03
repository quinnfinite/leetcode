/*
OICE:

O: Array of arrays - Each array is a set of numbers that sum to the target value
I: array of numbers, target value
C:
-- Array of candidates will be less than 30 numbers and at least 1 number.
-- Each number will be greater than or equal to 1 and less than or equal to 200
-- target will be between 1 and 500 (inclusive)
-- Solution set must not contain duplicate combos
E:

Diagram
[2,3,6,7], 7
2 < 7
3 < 7
4 < 7
6 < 7
7 = 7 - Add 7
2 + 2 < 7
2 + 3 < 7
2+6 > 7 - don't continue
2 + 7 < don't continue
2 + 2 + 2 < 7
2 + 2 + 3 = 7 - Add to results
2 + 2 + 6 > 7 don't continue
2 + 2 + 7 > 7 don't continue
2+ 3 + 2 = 7 - Add to results
2 + 3 + 6 > 7 don't continue



Pseudo

create results arr
recursive function - arr, sum
if sum > target - return
if sum = target - push arr to results & return

for each item in original array
  create copy of arr
  push item to copy arr
  add item to sum
  recurse on (copy of arr, newsum)


invoke recursive function on empty arr
return arr

*/

//Solution
var combinationSum = function(candidates, target) {
  var results = [];
  var resultsCounter = []
  var findSum = (arr, sum, counter) => {
    if (sum > target) return;
    if (sum === target) {
      var uniqueSolution = true;
      console.log(arr)
      for (var x = 0; x < resultsCounter.length; x++) {
        //console.log(counter)
        //console.log(resultsCounter)
        if(JSON.stringify(counter) === JSON.stringify(resultsCounter[x])) uniqueSolution = false
      }
      if (uniqueSolution) {
        results.push(arr);
        resultsCounter.push(counter)
      }
      return;
    }
    for (var i = 0; i < candidates.length; i++) {
      var tempArr = arr.slice()
      tempArr.push(candidates[i]);
      counter[candidates[i]] ? counter[candidates[i]]++ : counter[candidates[i]] = 1;
      counter = Object.create(counter);
      findSum(tempArr, sum+candidates[i], counter)
    }
  }
  findSum([], 0, {});
  return results;
};
//ISSUE - can't contain duplicates
//Ideas
//Object w/a frequency count for each solution.
//i.e.
// [
//   {7: 1},
//   {2: 2, 3: 1}
//]


//Tests
console.log(combinationSum([2,3,6,7], 7))