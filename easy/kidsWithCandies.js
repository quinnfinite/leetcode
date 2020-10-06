// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/
var kidsWithCandies = function(candies, extraCandies) {
  //find the highest # in the arr
  //new results arr
  //iter over the arr and compare the candies[i] + extraCandies to the highest # of candies.
    //If it's >= push true
    //else false
  var mostCandies = 0;
  candies.forEach(candy => {
    if(candy > mostCandies) {
      mostCandies = candy;
    }
  })
  var results = [];
  candies.forEach(candy => {
   candy + extraCandies >= mostCandies ? results.push(true) : results.push(false)
  })
  return results;
};


//Solution 2
var kidsWithCandies = function(candies, extraCandies) {
  var mostCandies = 0;
  for (var i = 0; i < candies.length; i++) {
      if(candies[i] > mostCandies) mostCandies = candies[i];
  }
  var results = [];
  for (var x = 0 ; x < candies.length; x++) {
      candies[x] + extraCandies >= mostCandies ? results.push(true) : results.push(false)
  }
  return results;
};