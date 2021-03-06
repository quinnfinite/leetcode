/*
OICE:

O: Integer
I: String - Containing Alpha-numeric characters
C:
E: Limits are +or- 2^31

Diagram
' -42'
iterate over the string
' ' - Do Nothing
'-' - a "-" only means there will be a negative number if the next char is a number
'4' - Number
'2' - Number

? How do we verify that it is a number?
    1. Use Number()
    2. Have an array or object of all numbers and compare.
        - this increases time complexity by 10 (have to iterate through an arr of 0-9 to check) 
    3. Make use of type coercion
        ex: "4" -1 = 3, "a" - 1 = NaN
        //Would need to acct for 0's as well so if that test was >== 0
"" - "" - 1 is NaN
"-" - "-" - 1 is NaN
"4" - "4" - 1  is 3 ---Keep track of this index
"2" - "2" - 1 is 1 --- keep track of this index

Pseudo
var result = 0;
var to keep track of starting index
var to keep track of ending index
var neg - boolean to keep track if the number is negative = default to false
iterate over string
    if char - 1 is >= 0
        if starting index is undefined - set starting index to current index
        set ending index to current index
    else if char is not " "
        break the loop
check if the character to the left of starting index is -
    if so, set boolean to true
convert the range of starting index to ending index to a Number
    //assign result to this expression
check if number is greater than 2^31
    if so, set result to this expression
if neg is true
    reassign result to result * -1

return result
*/

//Solution
var myAtoi = function(str) {
    var result = 0;
    var startingIndex, endingIndex;
    var neg = false;
    var maxNumber = 2**31;
    debugger;
    for (var char = 0; char < str.length; char++) {
      if (str[char] - 1 >= -1 && str[char] !== ' ') {
            if(startingIndex === undefined) startingIndex = char;
            endingIndex = char;
      } 
      else if ( (startingIndex >=0 && (str[char] === ' ' || str[char] === '-' || str[char] === '+'))|| (str[char] !== ' ' && str[char] !== '-' && str[char] !== '+')) {
          break;
      }
      else if (str[char] === '-' || str[char] === '+') {
        var nextChar = str[char+1];
        var options = [' ', '-', '+']
        if (options.indexOf(nextChar) > -1) return result;
      } 
    }
    //check for mixed
    if (str[startingIndex -2] === '-' || str[startingIndex - 2] === '+') return result; //which would be 0 at this time
    if (str[startingIndex - 1] === '-') neg = true;
    result = Number(str.slice(startingIndex, endingIndex + 1))
    if (result >= maxNumber) {
        if (neg) {
            result = -maxNumber;    
        } else {
            result = maxNumber - 1;
        }
        return result;
    } 
    if (neg) result *= -1
    return result ? result : 0;
  };

// //Tests
console.assert(myAtoi(" -42") === -42, `This should equal -42, but equals ${myAtoi("-42")}`)
console.assert(myAtoi("42") === 42, `This should equal 42, but equals ${myAtoi("42")}`)
console.assert(myAtoi("4193 with words") === 4193, `This should equal 4193, but equals ${myAtoi("-42")}`)
console.assert(myAtoi("-91283472332") === -2147483648, `This should equal -2147483647, but equals ${myAtoi("-91283472332")}`)
console.assert(myAtoi("words and 987") === 0, `This should equal 0, no conversion can be done. It equals ${myAtoi("words and 987")} instead`)
console.assert(myAtoi("+1") === 1, `Expected: 1, Actual: ${myAtoi("+1")}`)
console.assert(myAtoi("  0000000000012345678") === 12345678, `Expected: 12345678, Actual: ${myAtoi("  0000000000012345678")}`)
console.assert(myAtoi("+-2") === 0, `Expected: 0, Actual: ${myAtoi("+-2")}`)
console.assert(myAtoi("   +0 123") === 0, `Expected: 0, Actual: ${myAtoi("   +0 123")}`)
console.assert(myAtoi("2147483648") === 2147483647, `Expected: 2147483647 , Actual: ${myAtoi("2147483648")}`)
console.assert(myAtoi("-1") === -1, `Expected: -1, Actual: ${myAtoi("-1")}`)
console.assert(myAtoi("-2147483647") === -2147483647, `Expected: -2147483647, Actual: ${myAtoi("-2147483647")}`)
console.assert(myAtoi("91283472332") === 2147483647, `This should equal 2147483648, but equals ${myAtoi("91283472332")}`)
console.assert(myAtoi("-   234") === 0, `Expected: 0, Actual: ${myAtoi("-   234")}`)
console.assert(myAtoi("    -88827   5655  U") === -88827, `Expected: -88827, Actual: ${myAtoi("    -88827   5655  U")}`)
console.assert(myAtoi("-13+8") === -13, `Expected: -13, Actual: ${myAtoi("-13+8")}`)

//"-13+8"
//console.log(myAtoi("     -88827"))
 
// console.assert(myAtoi("   +0 123") === 0, `Expected: 0, Actual: ${myAtoi("   +0 123")}`)
// console.assert(myAtoi("   +0 123") === 0, `Expected: 0, Actual: ${myAtoi("   +0 123")}`)

