/*
OICE:

O: Array of strings
I: Integer
C: If multiple of 3 & 5 - FizzBuzz, 5 - Buzz, 3 - Fizz
E: What if 0 is input? - empty string

Diagram - 
starting @ 1
1 - divisible by 3 && 5 - no, div by 5 - no, div by 3 - no. add it as a string
2 - same
3 - not by 3&5 , no 5, yes 3 - Fizz
4 
5 - no 3&5, yes 5 - Buzz
6 - Fizz
7
8
9 Fizz
10 - Buzz
11
12 - Fizz
13
14
15 Fizz Buzz

Pseudo
var to hold arr of strings
iter from 1 to n
    if div by 3 && 5 - push FizzBuzz to arr
    if div by 5 - push Buzz to arr
    if dib by 3 - push Fizz to arr
    else push stringified number to arr
return var
*/

//Solution

var fizzBuzz = function(n) {
    var strings = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            strings.push("FizzBuzz");
        } else if (i % 5 === 0) {
            strings.push("Buzz");
        } else if (i % 3 === 0) {
            strings.push("Fizz");
        } else {
            strings.push(`${i}`)
        }
    }
    return strings
};


//Tests
