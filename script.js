// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  while(true){
    var numOfCharacters;
    var characterTypes;
    var lowerCase;
    var upperCase;
    var specialCharacters;
    var numOfCharacters = prompt("Enter the length of characters(Between 8 and 128 characters): \n");
    
    if(numOfCharacters >= 8){
      if(numOfCharacters <= 128){
      var characterTypes = confirm("Would you like to include character types(press 'ok' for yes)?: \n");

      if(characterTypes){
        var lowerCase = confirm("Would you like to inlude lowercase characters within the password? \n");
        var upperCase = confirm("Would you like to inlude uppercase characters within the password? \n");
        var specialCharacters = confirm("Would you like to inlude special characters within the password? \n");
        
        if(lowerCase){
          var lowerCase = prompt("Enter the lower case charactes: \n");
        }
        else{
          //Not break, byt something else.
          break;
        }
        if(upperCase){
          var upperCase = prompt("Enter the upper case charactes: \n");
        }
        else{
          //Not break, byt something else.
          break;
        }
        if(specialCharacters){
          var specialCharacters = prompt("Enter the special charactes: \n");
        }
        else{
          //Not break, byt something else.
          break;
        }
      }
      else {
        //skip the character types
      }
    
      else {
        console.log("Invalid input. Please try again.");
        continue;
      }
    }
    }
    //else for the conditioning for the ranges of characters.
    else {
      console.log("Number of characters aren't within range(8 <= x <= 128). Please try again.");
      continue;
    }
  }//while loop closing
  //May need to use loop to include loop for the math.random function.
  //comcatenate strings and variables for the password.
  console.log("");
}//function closing

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
