// variables user can choose from when prompted
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]


// prompts - including length - user can choose to create password
var generatePrompts = function () {
    var passwordLength = prompt("Please choose and enter password length between 8-128 characters:");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("This is an invalid choice.");
        return null;
    }
    var hasNumbers = confirm("Click OK if you would like to inlcude numbers in your password");
    var hasLowercase = confirm("Click OK if you would like to include lowercase letters in your password");
    var hasUppercase = confirm("Click OK if you would like to include uppercase letters in your password");
    var hasSpecial = confirm("Click OK if you would like to include special characters in your password");
    var passwordObject = {
        passwordLength: passwordLength,
        hasNumbers: hasNumbers,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasSpecial: hasSpecial
    }
    return passwordObject;
}

// random generation
function randomMechanism(array) {
    var randomPassword = array[Math.floor(Math.random() * array.length)]
    return randomPassword;
}

// puts password together
function finalPassword(answers) {
    var final = [];
    var possibleChar = [];
    var confirmChar = [];

    if (answers.hasNumbers) {
        possibleChar = possibleChar.concat(numbers)
        confirmChar.push(randomMechanism(numbers))
    }
    if (answers.hasLowercase) {
        possibleChar = possibleChar.concat(lowercase)
        confirmChar.push(randomMechanism(lowercase))
    }
    if (answers.hasUppercase) {
        possibleChar = possibleChar.concat(uppercase)
        confirmChar.push(randomMechanism(uppercase))
    }
    if (answers.hasSpecial) {
        possibleChar = possibleChar.concat(special)
        confirmChar.push(randomMechanism(special))
    }

    for (let i = 0; i < answers.passwordLength; i++) {
        final.push(randomMechanism(possibleChar));
    }


    // converts to text format
    return final.join('')

}


function generatePassword() {
    var answers = generatePrompts()
    const password = finalPassword(answers)
    writePassword(password)
}

// Write password to the #password input
function writePassword(password) {

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);