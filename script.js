// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=<>?";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "1234567890";
    var specialCharacters = "!@#$%^&*()-_+=<>?";
    var numOfCharacters;
    var characterTypes;
    var selectedChoices;
    var password = "";
    //TODO (9/8/2023)
    //Plan is to add all selected choices into container selectedChoices then randomize it after user choices.
    
    var numOfCharacters = prompt("Enter the length of characters(Between 8 and 128 characters): \n");
    do  {
    if(numOfCharacters >= 8 && numOfCharacters <= 128) {
    
      var characterTypes = confirm("Would you like to include character types(press 'ok' for yes)?: \n");
      if(characterTypes){
        var upperCase = confirm("Would you like to inlude upper case characters within the password? \n");
        var lowerCase = confirm("Would you like to inlude lower case characters within the password? \n");
        var numericCharacters = confirm("Would you like to inlude numeric characters within the password? \n");
        var specialCharacters = confirm("Would you like to inlude special characters within the password? \n");
        //concantenate strings if true into 'selectedChoices.
        
        if(upperCase){
          //within the container 'password' concantenate the lowercase to the password via random.
          selectedChoices += upperCase;
        }
        if(lowerCase){
           //within the container 'password' concantenate the uppercase to the password via random.
           selectedChoices += lowerCase;
        }
        if(numericCharacters){
          selectedChoices += numericCharacters;
        }
        if(specialCharacters){
           //within the container 'password' concantenate the variable specialCharacters to the password via random.
           selectedChoices += specialCharacters;
        }
        break;
    }
    else if(!upperCase && !lowerCase && !numericCharacters && !specialCharacters) {
      console.log("You must select at least one choice \n");
      continue;
    }
  }
else {
  console.log("The password length must be between 8 and 128, please try again. \n");
}
} while(true);

  //randomize selected choices

  for (var i = 0; i < numOfCharacters; i++) {
    /*This line of code is where I will include the math.random and/or math.floor function
    to randomize the selectedChoices then place the 
    selectedChoices into the var password then return password.*/ 
    password += selectedChoices;
  }
}//function closing.


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
