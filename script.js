//Arrays containing our characters

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

//Prompts to ascertain used character types

let passLength = prompt('Enter (using a number between 8-128) your preferred password length.'), 

    chooseLower = confirm("Include lowercase?"), 
    
    chooseUpper = confirm("Include uppercase?"),
    
    chooseNum = confirm ("Include numbers?"),
    
    chooseSpecial = confirm("Include special characters?")

//Loop for alphabetic characters

for(i = 0; i < 27; i++)





