// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: CODE GOES HERE
//change randonInt to something else

function generatePassword() {
    // 1 Prompt the user for the password criteria
    var initialInput = prompt("How many characters would you like your password to contain? Please choose between 8-128 characters.")
    var lengthOfCharacters = parseInt(initialInput)
//if I put in a NaN the prompt comes up but then the following prompts do not
    if (isNaN(lengthOfCharacters)) {
        prompt("Please enter a valid number between 8 and 128.");
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
}
    var conLowercaseCharacters = confirm("Do you wish to include lowercase characters in your password?");
    var conUppercaseCharacters = confirm("Do you wish to include uppercase characters in your password?");
    var conNumCharacters = confirm("Do you wish to include numbers in your password?");
    var conSpecialCharacters = confirm("Do you wish to include special characters in your password?");

    var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

    var wantedCharacters = []


    //var finalPassword = lowercaseCharacters.concat(uppercaseCharacters, numCharacters, specialCharacters);
    //console(finalPassword);

    if (conLowercaseCharacters) {
        wantedCharacters = wantedCharacters.concat(lowercaseCharacters)
    }
    if (conUppercaseCharacters) {
        wantedCharacters = wantedCharacters.concat(uppercaseCharacters)
    }
    if (conNumCharacters) {
        wantedCharacters = wantedCharacters.concat(numCharacters)
    }
    if (conSpecialCharacters) {
        wantedCharacters = wantedCharacters.concat(specialCharacters)
    }
    console.log(wantedCharacters)

    var finalPassword = ""

    for (var i = 0; i < lengthOfCharacters; i++) {
        finalPassword += wantedCharacters[Math.floor(Math.random() * wantedCharacters.length)];
    return finalPassword
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



