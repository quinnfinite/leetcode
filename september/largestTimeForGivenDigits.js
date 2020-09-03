/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3445/
OICE:

O: string representing time in 24 hour format - Ex: "23:59" or "" if no valid time can be made
I: Array of numbers
C:
E: Numbers are all greater than 2

Diagram
Acceptable numbers
1-2, 0-9 OR 0-3, 0-5, 0-9

[1,2,3,4]
1 - 1 is an acceptable # for the first char
2 - is an acceptable # for first char - 2>1
3 - Not acceptable for the first char
4 - not acceptable

string: "2"
remaining digits [1,3,4]
1 - acceptable
3 - acceptable 3 > 1 -
4 not acceptable
string: "23"
add ":"
string "23:"
remaining digits [1,4]
1- acceptable
4 - acceptable



Pseudo
create variable to hold string
create counter variable
create a while loop, that executes as long as counter < 5
  if string length is 2 - add ":" and break loop
  create var for largestPossible to null
  create var for index
  iterate over array
    if string length is 0
    //if item is 1 or 2 && item > largestPossible
      //set largestPossible to item
    if string length is 1
      //if 1st char - 1
        //if item is between 0 and 9 (inclusive) & item > largestPossible
          //assign largestPossible to item
          //assign index to index var
      //if 1st char - 2
        //if item is between (inclusive) 0 and 3 & item > largestPossible
          //assign largestPossible to item
          //assign index to index var
    if string length is 3
      //if item is between 0 and 5
        //assign largestPossible to item
        //assign index to index var
    if string length is 4
      //if item is between 0 and 9
        //assign largestPossible to item
        //assign index to index var
  if largestPossible is not null
    //add largestPossible to string
  increase counter

if string length ===5 return string, otherwise return ""
*/

//Solution
var largestTimeFromDigits = function(A) {
  var time = "";

  var counter = 0;

  while (counter < 5) {
    if (time.length === 2) {
      time += ":";
      counter++;
      continue
    }
    var largestPossible = -1;
    var index;
    for (var i = 0; i < A.length; i++) {
      if (time.length === 0) {
        if(A[i] <= 2 && A[i] > largestPossible) {
          largestPossible = A[i];
          index = i;
        }
      }
      if (time.length === 1) {
        if(time[0] === "1" || time[0] === "0") {
          if (A[i] >= 0 && A[i] <= 9 && A[i] > largestPossible) {
            largestPossible = A[i];
            index = i;
          }
        }
        if (time[0] === "2") {
          if (A[i] >= 0 && A[i] <= 3 && A[i] > largestPossible) {
            largestPossible = A[i];
            index = i;
          }
        }
      }
      if (time.length === 3) {
        if (A[i] >= 0 && A[i] <= 5 && A[i] > largestPossible) {
          largestPossible = A[i];
          index = i;
        }
      }
      if (time.length === 4) {
        if (A[i] >= 0 && A[i] <= 9 && A[i] > largestPossible) {
          largestPossible = A[i];
          index = i;
        }
      }
    }

    if (largestPossible > -1) {
      time += largestPossible;
      A.splice(index, 1)
    }
    counter++;
  }
  return time.length === 5 ? time : ""
};

//Tests

console.log(largestTimeFromDigits([0,0,0,0]))