var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var stringOne = {};
  var stringTwo = {};
  for (var i = 0; i < s.length; i++) {
      stringOne[s[i]] ? stringOne[s[i]] += 1 : stringOne[s[i]] = 1;
      stringTwo[t[i]] ? stringTwo[t[i]] += 1 : stringTwo[t[i]] = 1;
  }
  for (var char in stringOne) {
      if(stringOne[char] !== stringTwo[char]) return false;
  }
  return true;
};

//https://leetcode.com/problems/valid-anagram/solution/
// console.log(isAnagram("car","rac"))