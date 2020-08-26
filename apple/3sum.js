/*
OICE:

O: Array of arrays - each array will have three numbers
I: Array of numbers
C: ?
E: ? Each solution must be a unique set of triplets

?? What about arrays that have the same # multiple times.
?? Make sure the each number is of a unique index, i.e. can't use arr[0] multiple times.

Diagram
[-1, 0, 1, 2, -1, -4],

-1 - requires 2 numbers that sum to +1
0 - requires 2 numbers that sum to 0
1 - requires 2 nums that sum to -1
2 - requires 2 nums that sum to -1
-1 - requires 2 nums that sum to +1
-4 - requires 2 num that sum to +4

options: 
- keep it all in one function or split out into multiple functions
- one for 3 sum, and a helper 2 sum function

2sum - arr, target, index to not use
[-1, 0, 1, 2, -1, -4], + 1, 0

iter over arr
0 - starts at 0 because we skip the 0 index
1 - 0  = 1 - look for a 1
the index of 1 is 2
Add [0,1] to results

1
1 - 1 = 0
the index of 0 is 1, and that index is lower than the index we are currently on, so it has been considered.
Nothing happens

2
1 - 2 = -1
index of -1 is 4
add [2, -1] to results

and so on....


Pseudo
3 sum - arr
create arr for results
iterate over the arr
    for each item in the array
        target = 0 - item
        invoke 2sum (arr, target, currentIndex)
        if the result of 2sum is not an empty array
        add the current item to the front of each array within the result

return results

2sum - arr, target, index
create arr to hold results
iterate over arr
    if not index
        subtract current item at index from target
            slice the arr from it's current index to the end
            find the indexOf this result on the sliced arr
                if the index is greater than the current index
                    add current item and item at that index to an array, and push that array to result 

return results arr

*/

//Solution
function threeSum(arr) {
    var results = [];
    arr.forEach((number, index) => {
        var target = 0 - number;
        var twoNum = twoSum(arr.slice(index), target, index);
        if(twoNum.length > 0) {
            twoNum.forEach((arr) => {
                arr.unshift(number)
                results.push(arr)
            })
        }
    })
    return results;
}


// function twoSum(arr, target, index) {
//     var results = [];
//     //console.log(arr)
//     for (var i = 0; i < arr.length; i++) {
//         if(i !== index) {
//             var tempArr = arr.slice(i);
//             var num = tempArr.indexOf(target-arr[i])
//             if( num > -1) results.push([arr[i], tempArr[num]])
//         }
//     }
//     return results;
// }


function twoSum(arr, target, index) {
    var results = [];
    arr = arr.slice(index)
    for (var i = 0; i < arr.length; i++) {
            var tempArr = arr.slice(i);
            var num = tempArr.indexOf(target-arr[i])
            if( num > -1) results.push([arr[i], tempArr[num]])
    }
    return results;
}

//Tests
var arrOne = [-1, 0, 1, 2, -1, -4]
console.log(twoSum(arrOne, 1, 0))
// console.log(threeSum(arrOne))