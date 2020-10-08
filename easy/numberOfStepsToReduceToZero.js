var numberOfSteps  = function(num) {
  if(num === 0) return num;
  if(num % 2 === 0) {
      num = num/2;
  } else {
      num -= 1;
  }
  return 1 + numberOfSteps(num);
};

//if num is 0, return 0;

//counter variable?? not needed

//if even
  //divide by two
//else
  //subtract 1
//increment count

//return count + numberOfSteps invoked on the new number

//solution 2
var numberOfSteps  = function(num) {
  var count = 0;
  while (num > 0) {
      if(num % 2 === 0) {
          num = num/2;
      } else {
          num -= 1;
      }
      count++;
  }
  return count;
};

//count var

//while num > 0;
//if num is even
  //divide by two
//else decrement by 1
//increment count;
//return count;