//Sol 1
//https://leetcode.com/problems/remove-vowels-from-a-string/submissions/
var removeVowels = function(S) {
  var newString = '';
  var vowels = ['a','e','i','o','u']
  for (var char = 0; char < S.length; char++) {
      if(vowels.indexOf(S[char]) === -1) newString += S[char]
  }
  return newString;
};