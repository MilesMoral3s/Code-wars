/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


*/

var alphabetPosition = text => {
var decyphered = '';
var i;
    for (i = 0; i < text.length; i++) { // This will set the time to run through the length of the text string/input
        
       let code = text.toUpperCase().charCodeAt(i);
        if(code > 64 && code < 91) decyphered += (code - 64) + " "; 
        // we store the decyphered code into the variable but before that we take away 64 to change the utf 16 code into the 
        //coding problems required parameters 1 = A, 2 = B etc, any utf number take away 64 = 1 = A, 2 = B
         
        
    }
   return decyphered.slice(0, decyphered.length - 1);  
    
};