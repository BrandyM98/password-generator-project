// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];


//TODO: CODE GOES HERE
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


    var lowercaseCharacters=confirm("Do you wish to include lowercase characters in your password?");
    var uppercaseCharacters=confirm("Do you wish to include uppercase characters in your password?");
    var numCharacters=confirm("Do you wish to include numbers in your password?");
    var specialCharacters=confirm("Do you wish to include special characters in your password?");



//  } else if (isNaN(lengthOfCharacters)){
//   lengthOfCharacters = prompt("Please enter a valid number.");
//} else {
//alert("Your password will be " + lengthOfCharacters + "characters long!")
//}

// 1a password length between 8-128
// 1b lower upper numb special
// 2 Validate the input
// 3 generate password based on criteria



// 4 display the password to the page 
return "Generated password will go here!";
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



