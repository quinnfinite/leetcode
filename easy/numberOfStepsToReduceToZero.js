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