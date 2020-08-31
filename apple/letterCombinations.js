/*
https://leetcode.com/explore/interview/card/apple/509/recursion/3123/
OICE:

O: Array of strings - each string containing a possible combination of the string of letters
I: "string of numbers"
C: will be numbers 2-9
E: ? empty string

Diagram
object of numbers and corresponding letter options
{
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r', 's'],
    8: ['t','u','v'],
    9: ['w','x','y', 'z'],
}


input "23"
look at letters for 2
a,b,c
a
look at letters for 3
d,e,f
ad
ad == length of input,
add ad to array


Pseudo - 23

create results array
object of numbers and corresponding letters

recursive function - string, index
--if string length equal to digits length
    --Push the string into results

for each item in array at digits[string[index]]
 XXXif string[index+1] existsXX
    invoke recursive function on (string+item,index+1)


return results


*/

//Solution
var letterCombinations = function(digits) {
  if(!digits) return []
  var results = [];
  var digitsLibrary = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r', 's'],
    8: ['t','u','v'],
    9: ['w','x','y', 'z'],
}

var createString = function (string, index) {
    if(string.length === digits.length) {
        results.push(string)
        return;
    }
    for (var i = 0; i < digitsLibrary[digits[index]].length; i++) {
        createString(string+digitsLibrary[digits[index]][i],index+1)
    }
}

createString('', 0)
return results;
};

//Tests
console.log(letterCombinations(""))