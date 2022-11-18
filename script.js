// Assignment Code
var generateBtn = document.querySelector("#generate");

//Initialize arrays of options one time
let specialChars = [' ', '!', '"', '#', '$', '%', '&',
"'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';',
'<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
let nums = ['1','2','3','4','5','6','7','8','9','0'];
let capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// return string of generated password
function generatePassword() {
  let desiredLength = prompt('How long do you want your password to be?');
  if (isNaN(parseInt(desiredLength)) || desiredLength < 8 || desiredLength > 128) {
    console.log(desiredLength);
    alert('You must enter a number between 8 and 128 for the length to generate a password');
    return;
  }

  let characterOptions = [];
  let password = '';

  if (confirm('Click OK to include special characters in your password:')) {
    characterOptions = characterOptions.concat(specialChars);
  }

  if (confirm('Click OK to include numbers in your password:')) {
    characterOptions = characterOptions.concat(nums);
  }

  if (confirm('Click OK to include capital letters in your password:')) {
    characterOptions = characterOptions.concat(capitals);
  }

  if (confirm('Click OK to include lowercase letters in your password:')) {
    characterOptions = characterOptions.concat(lowercase);
  }

  if (characterOptions.length == 0) {
    alert("Error, cannot create password without at least one set of options. Try again.");
    return;
  }

  for (let i = 0; i < desiredLength; i++) {
    password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
