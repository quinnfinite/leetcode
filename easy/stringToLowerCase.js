// https://leetcode.com/problems/to-lower-case/submissions/
// var toLowerCase = function(str) {
//   return str.toLowerCase()
// };

//solution 2 - https://leetcode.com/problems/to-lower-case/submissions/
// const letters = {
//   'A': 'a',
//   'B': 'b',
//   'C' : 'c',
//   'D' : 'd',
//   'E' : 'e',
//   'F' : 'f',
//   'G' : 'g',
//   'H' : 'h',
//   'I' : 'i',
//   'J' : 'j',
//   'K' : 'k',
//   'L' : 'l',
//   'M' : 'm',
//   'N' : 'n',
//   'O' : 'o',
//   'P' : 'p',
//   'Q' : 'q',
//   'R' : 'r',
//   'S' : 's',
//   'T' : 't',
//   'U' : 'u',
//   'V' : 'v',
//   'W' : 'w',
//   'X' : 'x',
//   'Y' : 'y',
//   'Z' : 'z',
// }
// var toLowerCase = function(str) {
//   let generatedString = '';
//   for (const char of str) {
//     generatedString += letters[char] ? letters[char] : char
//   }
//   return generatedString
// };


//Solution 3
var toLowerCase = function(str) {
  let generatedString = '';
  for (const char of str) {
    const index = char.charCodeAt(0)
    generatedString += (index >= 65 && index <=90) ? String.fromCharCode(index + 32) : char;
  }
  return generatedString
};

console.log('lower case of APplE - ', toLowerCase('APplE'))