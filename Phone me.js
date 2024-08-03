/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!


*/


var createPhoneNumber = (numbers) => {
var array2string = numbers.join("");
var areacode = array2string.substring(0,3);
var middle = array2string.substring(3,6);
var end = array2string.substring(6,10);


var result =  `(${areacode}) ${middle}-${end}`;

  return result;
  
};