// `
// have an arr of a log file. each log is space delimited string of words
// for each log the first word is an alphanumerical ID - each word after will consist of only letters or only digits

// two types of logs - digit or word logs

// //logid1 - word

// //each log will

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// //outcome

// //word logs first - sorted alphabetically first, by log id second


// //digit logs - no sort

// `

// //OICE
// `
// O: array of logs - sorted letter logs first (sorted alphabetically, with ids as tie breakers) , followed by unsorted dig logs
// I: array of logs - unsorted, but have identifiers for whether they are word or letter logs
// C: n/a - guaranteed that logs lengths will be 0 to 100. Always guaranteed to have an identifier
// E: sorting letter - Order by tie breaker if the word is the same

// `


// //DIAGRAM
// `
// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

// split the logs into letter logs and digit logs
//   //letter logs - ["let1 art can","let2 own kit dig","let3 art zero"]
//   //dig logs - ["dig1 8 1 5 1","dig2 3 6"]

// sort the letter logs - alphabetically
//  //["let1 art can","let3 art zero", ,"let2 own kit dig"]
//   //iterate over this array - run a sort
//     //the sort to look at all of the words after the identifier
//       //art can compared to art zero
//       a = let1 art ....
//       b = let3 art ....
//       removing the identifier
//       a = art ....
//       b = art ....

//       //find the indexOf the first space, -> bc it's the delimiter
//         //a.slice(index) -> art ....
//         //b.slice(index) -> art ....
//     //alphabetical
//       sort((a,b) => {
//         return a - b
//       })

//     //sort by id
//       //a.slice(0, index)
//       //b.slice(0, index)
//       //sort

// combine the arrays - putting dig logs at the end of letter logs
//   //["let1 art can","let3 art zero", ,"let2 own kit dig"] & ["dig1 8 1 5 1","dig2 3 6"]
//   // becomes -> ["let1 art can","let3 art zero", ,"let2 own kit dig", "dig1 8 1 5 1","dig2 3 6"]

// return our sorted array
// `


// //PSEUDOCODE
// `
// //input arr

// // letterLogs = []
// // digLogs = []

// //splits our logs
// //iterate over the logs - i
//     //if log[i].slice(0,4) === let
//       //push it to letterLogs
//     //else
//       //push it to digLogs

// //letterLogs.sort((a, b) => {

// })
// //sort on letter logs - alpha
//   //find indexOf first space at a and b
//     return a.slice(index) - b.slice(index)

// //sort on letter
//   //find indexOf first space
//   //return a.slice(0, index) - b.slice(0, index)


// //finish pseudo


// https://leetcode.com/problems/reorder-data-in-log-files/
// `

var reorderLogFiles = function(logs) {
  var letterLogs = [];
  var digLogs = [];

  for (var i = 0; i < logs.length; i++) {
    //console.log(logs[i].slice(0,3))
    if(logs[i].slice(0,3) === 'let') {
          letterLogs.push(logs[i]);
      } else {
          digLogs.push(logs[i]);
      }
  }
  console.log('Start - ',letterLogs)
  //alphabetical sort
  letterLogs.sort((a, b) => {
      // console.log('a - ', a.slice(a.indexOf(' ')))
      // console.log('b - ', b.slice(b.indexOf(' ')))
      var aAlpha = a.slice(a.indexOf(' '));
      var bAlpha = b.slice(b.indexOf(' '));
      var aDig = a.slice(3, a.indexOf(' '));
      var bDig = b.slice(3, b.indexOf(' '))
      if (aAlpha < bAlpha) return -1;
      if (aAlpha > bAlpha) return 1;
      //tiebreakers for digs
      if (aDig < bDig) return -1
      if (aDig > bDig) return 1
      //return 0;
      //return a.slice(a.indexOf(' ')) - b.slice(b.indexOf(' '))
  })
  //console.log('After alpha - ', letterLogs)
  //sort by digit # of letter
  // letterLogs.sort((a,b) => {
  //     return a.slice(3, a.indexOf(' ')) - b.slice(3, b.indexOf(' '))
  // })
  //letterLogs.sort();
  console.log('dig sort - ',letterLogs)
  var finalLogs = letterLogs.concat(digLogs)
  return finalLogs
};


var input = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
var actual = JSON.stringify(reorderLogFiles(input))
var expected = JSON.stringify(["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"])

console.assert(actual === expected, `Expected ${actual} to be: ${expected}`);



var inputTwo = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
var actualTwo = JSON.stringify(reorderLogFiles(inputTwo));
var expectedTwo = JSON.stringify(["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"])

console.assert(actualTwo === expectedTwo, `Expected ${actualTwo} to be: ${expectedTwo}`);


//ISSUE - After submitting the problem, it's clear that the key issue in my algorithm is a misunderstanding about the identifiers. It will not always be dig or let.
// Will continue to need to look into this
