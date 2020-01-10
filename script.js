

//Arrays containing our characters

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

 upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

 numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],

 specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]


//Prompt to ascertain passLength
let passLength = prompt('Enter (using a number between 8-128) your preferred password length.') 
//Changing passLength string to integer
let parsedLength = parseInt(passLength)
//Logging parsedLength for integrity
console.log("Password length: " + parsedLength)

//Confirmations for used character types
let chooseLower = confirm("Include lowercase?")     

let chooseUpper = confirm("Include uppercase?")
    
let chooseNum = confirm ("Include numbers?")
    
let chooseSpecial = confirm("Include special characters?")

//Variables for character inclusions
var allChar = [];

if(chooseLower && chooseUpper && chooseNum && chooseSpecial) {
    allChar = lowerCase.concat(upperCase, numbers, specialChars)
}


else if(chooseLower && chooseUpper && chooseNum) {
    var noSpec = lowerCase.concat(upperCase, numbers)
}

else if(chooseLower && chooseUpper) {
    var onlyAlph = lowerCase.concat(upperCase)
}

else if(chooseUpper && chooseNum && chooseSpecial) {
    var noLower = upperCase.concat(numbers, specialChars)
}



//Loop for password generation

function passGen(char) {
    console.log(char)
    var password = "";
    for(i = 0; i < parsedLength; i++) {
        var randomNum = Math.floor(Math.random() * char.length);
        //line 61 needs to be captured in a string.
        char[randomNum]
        
    }

    // document.getElementById("textArea").value = password
}

passGen(allChar);







