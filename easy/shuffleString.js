//https://leetcode.com/problems/shuffle-string/submissions/
var restoreString = function(s, indices) {
  var newString = [];

  for (var i = 0; i < s.length; i++) {
      newString[indices[i]] = s[i];
  }

  return newString.join('');
};

//1 solution
//create arr
//iterate over string
  //for each char look at the matching index in indices
  //add char at that indice into the arr

//join the arr to create a string
//return the new string;
