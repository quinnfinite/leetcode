/*
OICE:

O: index or -1 if no unique char.
I: string
C: ?
E: what about whitespaces? - "you may assume the string contains only lowercase English letters"

Diagram
"leetcode"
l
//iter over each remaining letter
e,e,t,c,o,d,e - no l found - return 0



Pseudo
firstUniqChar - string

iter over string
    var unique = true
    for each character (char)
        iter over rest of string (charTwo)
            if char = charTwo
                set unique to false
                break the loop
        if unique is true - return i        
return -1
*/

//Solution 1 - Beats 92.63 % of JS runtimes && 86.6 Memory Dis- https://leetcode.com/submissions/detail/387183909/?from=/explore/interview/card/apple/344/array-and-strings/2018/
var firstUniqChar = function (s) {
    for (var i = 0; i < s.length; i++) {
        var unique = true;
        var char = s[i];
        for (var x = 0; x < s.length; x++) {
            var charTwo = s[x];
            if(x!==i && char === charTwo) {
             unique = false;
             break;   
            }
        }
        if (unique) return i;
    }
    return -1;
}

//Solution 2 - Not as fast or mem efficeint - https://leetcode.com/submissions/detail/387186650/?from=/explore/interview/card/apple/344/array-and-strings/2018/
// var firstUniqChar = function (s) { 
//     var countObj = {};
//     for (var i = 0; i < s.length; i++) {
//         if (countObj[s[i]]) {
//             countObj[s[i]]++;
//         } else {
//             countObj[s[i]] = 1;
//         }
//     }
//     for (var x = 0; x < s.length; x++) {
//         if(countObj[s[x]] === 1) return x;
//     }
//     return -1;
// }


//Tests
console.assert(firstUniqChar('leetcode') === 0, `Expected: 0, Actual: ${firstUniqChar("leetcode")}`)
console.assert(firstUniqChar("loveleetcode") === 2, `Expected: 2, Actual: ${firstUniqChar("loveleetcode")}`)
console.assert(firstUniqChar("cc") === -1, `Expected: -1, Actual: ${firstUniqChar("cc")}`)

//console.assert(firstUniqChar("") === 0, `Expected: 0, Actual: ${firstUniqChar("")}`)