/*
OICE:

O: Integer within -2^31 to 2^31 - 1
I: Integer
C:
E: Return 0 if int is outside of that range.

Diagram
Input: 123
last int 3
next int 2
first int 1
321

input: -123
number is negative
last int 3
2nd int 2
first int 1
-321


Pseudo
//if number is not within range, return 0.

//boolean to identify if number is negative
  //ternary - number < 0 ? true : false

//if boolean is true
  //number + -2*number

//set divisor to 10

//arr to hold digits

//while number is not equal to 0.
  //find remainder of dividing number by 10
  //push remainder to arr
  //subtract remainder from number
  //reassign number to number/10

123
3, 2, 1
//var for resultNumber = 0
//iterate over arr
  //resultNumber + 10^arr.length - index

//return neg ? resultNumber * 1 : resultNumber
*/

//Solution



var reverse = function(num) {
  var neg = num < 0 ? true : false;
  if (neg) num = num -2 * num;
  var digits = [];
  while (num !== 0) {
    var remainder = num % 10;
    digits.push(remainder);
    num -= remainder;
    num = num/10;
  }
  var resultNumber = 0;
  digits.forEach((number, i) => {
    resultNumber += number * 10**(digits.length-i-1)
  })
  resultNumber = neg ? resultNumber * -1 : resultNumber
  if (resultNumber > 2**31 - 1 || resultNumber < -1 * 2**31) return 0;
  return resultNumber;
};


//Tests
[reverse(-2147483648), reverse(100),reverse(120), reverse(-123), reverse(1534236469)].forEach((func) => console.log(func))