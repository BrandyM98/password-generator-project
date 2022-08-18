// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: CODE GOES HERE
//change randonInt to something else
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomArray(list) {
    return list[randomInt(0, list.length - 1)]
}


function generatePassword() {
    // 1 Prompt the user for the password criteria
    var initialInput = prompt("How many characters would you like your password to contain? Please choose between 8-128 characters.")
    var lengthOfCharacters = parseInt(initialInput)

    if (isNaN(lengthOfCharacters)) {
        prompt("Please enter a valid number.");
        return
    }

    if (lengthOfCharacters < 8 || lengthOfCharacters > 128) {
        prompt("Please enter a valid number between 8 and 128.");
        return
    }

    if (lengthOfCharacters < 8 && lengthOfCharacters > 128) {
        prompt("Do you wish to include lowercase characters in your password?");
        return
    }


    var conLowercaseCharacters = confirm("Do you wish to include lowercase characters in your password?");
    var conUppercaseCharacters = confirm("Do you wish to include uppercase characters in your password?");
    var conNumCharacters = confirm("Do you wish to include numbers in your password?");
    var conSpecialCharacters = confirm("Do you wish to include special characters in your password?");

    var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

    var wantedCharacters=[]

    for (var i = 0; i < lowercaseCharacters.length; i++){
        uppercaseCharacters[i] = lowercaseCharacters[i].toUpperCase()
    }

    if (conLowercaseCharacters === true){
        wantedCharacters.push(lowercaseCharacters)
    }
    if (conUppercaseCharacters === true){
        wantedCharacters.push(uppercaseCharacters)
    }
    if (conNumCharacters === true){
        wantedCharacters.push(numCharacters)
    }
    if (conSpecialCharacters === true){
        wantedCharacters.push(specialCharacters)
    }

    console.log(wantedCharacters)

  var finalPassword = ""

  for (var i = 0; i < lengthOfCharacters; i++){
    var randomPass = getRandomArray(wantedCharacters)
    var getRandomPass = getRandomArray(randomPass)
    console.log(getRandomPass)
  }
}
    

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



