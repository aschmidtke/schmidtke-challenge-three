var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]


// We need a function that prompts the user for the various passowrd options including length,
// Also we need to put a limitation on length (some kind of conditional)
var generatePassword = function () {
function chooseCriteria() {
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
// We need another function for the random generation of characters
function randomMechanism(array) {
    var randomPassword = array[Math.floor(Math.random() * array.passwordLength)]
    return randomPassword;
}

// We need another function that actually puts the password together (concat and places into empty array)
// statement that adds the array of each choice, numbers, letters, characters based on whatever the user has inputted
// adding usually means using concat
function finalPassword() {
    var answers = chooseCriteria();
    var final = [];
    var possibleChar = [];
    var confirmChar = [];

    if(answers.hasNumbers) {
        possibleChar = possibleChar.concat(numbers)
        confirmChar.push(randomMechanism(numbers))
    }
    if(answers.hasLowercase) {
        possibleChar = possibleChar.concat(lowercase)
        confirmChar.push(randomMechanism(lowercase))
    }
    if(answers.hasUppercase) {
        possibleChar = possibleChar.concat(uppercase)
        confirmChar.push(randomMechanism(uppercase))
    }
    if(answers.hasSpecial) {
        possibleChar = possibleChar.concat(special)
        confirmChar.push(randomMechanism(special))
    }

for( var i = 0; i < answers.length; i++) {
    var possibleChar = randomMechanism(possibleChar);
    final.push(possibleChar);
    
}

for( var i = 0; i < confirmChar.length; i++) {
    final[i] = confirmChar[i];
    
}
// need to convert to text format

return final.join('')

}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);