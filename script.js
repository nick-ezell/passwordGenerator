//Loop for password generation
function genPass() {
//Arrays containing our characters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
//Prompt to ascertain passLength
const passLength = prompt('Enter (using a number between 8-128) your preferred password length.') 
//Changing passLength string to integer
const parsedLength = parseInt(passLength)
//Confirmations for used character types
const includeLower = confirm("Include lowercase?")    
const includeUpper = confirm("Include uppercase?")
const includeNum = confirm ("Include numbers?")
const includeSpecial = confirm("Include special characters?")
//Variables for character inclusions
let char = [];
//Defining conditionals for character inclusion variables
if(includeLower && includeUpper && includeNum && includeSpecial) {
    char = lowerCase.concat(upperCase, numbers, specialChars)
}else if(includeLower && includeUpper && includeNum) {
    char = lowerCase.concat(upperCase, numbers)
}else if(includeLower && includeUpper) {
    char = lowerCase.concat(upperCase)
}else if(includeUpper && includeNum && includeSpecial) {
    char = upperCase.concat(numbers, specialChars)
}else if (includeNum && includeSpecial) {
    char = numbers.concat(specialChars)
};
//Variable for generated password
var password = "";
for(i = 0; i < parsedLength; i++) {
    password += char[Math.floor(Math.random() * char.length)]
    };
document.getElementById("textArea").value = password;
};
document.getElementById('gen').addEventListener('click', genPass);
//Function for copying generated password to clipboard
function copy() {
    var copyText = document.querySelector("#textArea");
    copyText.select();
    document.execCommand("copy");
  };
  document.querySelector("#copy").addEventListener("click", copy);