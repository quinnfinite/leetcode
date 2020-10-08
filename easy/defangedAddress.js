var defangIPaddr = function(address) {
  var defangedAddress = '';
  for (var char of address) {
      char === '.' ? defangedAddress += '[.]' : defangedAddress += char
  }
  return defangedAddress;
};

//create a new string - empty
//iterate over address
//if the character is a .
  //[.]
//else
  //add char
//return new string