var numJewelsInStones = function(J, S) {
  var count = 0;

  var jewels = {};

  for (var jewel of J) {
      jewels[jewel] = jewel;
  }
  for (var stone of S) {
      if(jewels[stone]) count++
  }

  return count;
};

  //count variable
  //object to store jewels
  //iterate over j
      //add each jewel to the object
  //iterate over S
      //if the item in S is in the jewels object
          //increment the count