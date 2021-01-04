// https://leetcode.com/problems/goal-parser-interpretation/submissions/
var interpret = function(command) {
  var parsedCommand = '';

  for (var char = 0; char < command.length; char++) {
      const currentChar = command[char]
      const nextChar = command[char+1]
      if(currentChar === '(' && nextChar === ')') {
          parsedCommand += 'o'
      } else if (currentChar !== '(' && currentChar !==')') {
                 parsedCommand += currentChar
      }
  }

  return parsedCommand
};