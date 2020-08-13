//Problem - https://leetcode.com/problems/merge-two-sorted-lists/
//OICE

// `
// Output: a new sorted list

// Input: Two sorted linked lists

// C: n/a

// E: Are the linked lists the same length? linked list where the order is more disparate




// `


// `
// Diagram
// L1: [1,2,4]
// L2: [1,3,4]

// iterate over the first linked list and second linked list at the same time

// 1
// 1
// new: 1,1

// 2,3

// new: 1,1, 2,3

// 4
// 4

// new: 1,1,2,3,4,4


// //
// L1: [1,3,4]
// L2: [1,2,4]

// 1
// 1
// NEW: 1,1

// 3
// 2
// new: 1,1,2,3

// 4
// 4
// new: 1,1,2,3,4,4

// //
// L1: [1,3,4]
// L2: [5,6,7]

// 1
// 5
// NEW: 1,5

// 3
// 6
// NEW: 1,3,5,6

// ETC....

// What if I just concatted the lists and sorted in place?

// L1: [1,3,4]
// L2: [5,6,7]

// NEW: [1,3,4,5,6,7]

// then sort

// `


// `
// Pseudo:

// concat the sorted list into a single list
// sort
// return the new list

// `


var mergeTwoList = function (l1, l2) {
    var newList = [];
    for (var i = 0; i < l1.length;)
    newList.sort();
    return newList;
}

var listOne = [1,2,4];
var listTwo = [1,5,6];

console.log(mergeTwoList(listOne, listTwo));


//Solution 1 - Bug in leetcode does not accept concat as a function...works on local machine
// var mergeTwoList = function (l1, l2) {
//     var newList = l1.concat(l2).sort()
//     return newList;
// }

//Solution 2 - Bug in leetcode does not accept splice as a function...works on local machine
// var mergeTwoList = function (l1, l2) {
//     var newList = l1.splice(0);
//     l2.forEach(num => newList.push(num))
//     newList.sort();
//     return newList;
// }

//Note: Leetcode displays the linkedList as an array, but it is an object. Checked with Array.isArray() and typeof.