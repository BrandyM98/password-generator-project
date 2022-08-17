//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //TODO: CODE GOES HERE
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|" ,"}", "~"];
}
// this section has to do with the length of characters in readme above in line 6
function generatePassword(){}

lengthOfCharacters = promt("How many characters do you want in your password? Please choose between 8-128 characters.");
if(lengthOfCharacters < 8 || lengthOfCharacters >28){
  console.log("Please choose a password with the correct number of characters.");
} else if (isNaN(lengthOfCharacters)){
  lengthOfCharacters = prompt("Please enter a valid number.");
} else {
  alert("Your password will be " + lengthOfCharacters + "characters long!")
}

//this section has to do with the lowercase characters of the password in readme above in line 9
lowercaseCharacters =("Do you wish to include lowercase characters in your password?");
if (lowercaseCharacters){
  console.log("Your password will contain lowercase characters!");
} else (lowercaseCharacters){
  console.log("Your password will NOT contain lowercase characters!")
}

//this section has to do with the upperrcase characters of the password in readme above in line 9
uppercaseCharacters =("Do you wish to include uppercase characters in your password?");
if (uppercaseCharacters){
  console.log("Your password will contain uppercase characters!");
} else (uppercaseCharacters){
  console.log("Your password will NOT contain uppercase characters!")
}

//this section has to do with the number characters of the password in readme above in line 9
numCharacters =("Do you wish to include numbers in your password?");
if (numCharacters){
  console.log("Your password will contain numbers!");
} else (numCharacters){
  console.log("Your password will NOT contain numbers!")
}

//this section has to do with the special characters of the password in readme above in line 9
specialCharacters =("Do you wish to include special characters in your password?");
if (specialCharacters){
  console.log("Your password will contain special characters !");
} else (specialCharacters){
  console.log("Your password will NOT contain special characters !")
}

//this is just in case they choose none of the criteria
if(!lowercaseCharacters && !uppercaseCharacters && !numCharacters && !specialCharacters){
  console.log("Please select at least one character!");
}

//this is to confirm password criteria selected
//might change possible characters to something else

var possibleCharacters=[] //I think I need this to generate the password

var confirmLength= "";
var confirmLowercaseCharacter,
var confirmUppercaseCharacter,
var confirmNumCharacter,
var confirmSpecialCharacter,





if(lowercaseCharacters){
  possibleCharacters=possibleCharacters.concat(lowercaseCharacters);
}if(uppercaseCharacters){
  possibleCharacters=possibleCharacters.concat(uppercaseCharacters);
}if(numCharacters){
  possibleCharacters=possibleCharacters.concat(numCharacters);
}if(specialCharacters){
  possibleCharacters=possibleCharacters.concat(specialCharacters);
}

//to generate random password
var finalPassword= ""
for (var i = 0; i<lengthOfCharacters; i++){
  var rng=[Math.floor(Math.random() * possibleCharacters.length)];
} console.log(finalPassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
