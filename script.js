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
    //Plan is to create random versions of lower, upper, special containers then concantenate them at the end for password.
    
    var numOfCharacters = prompt("Enter the length of characters(Between 8 and 128 characters): \n");
    
    if(numOfCharacters >= 8 && numOfCharacters <= 128) {
    
      var characterTypes = confirm("Would you like to include character types(press 'ok' for yes)?: \n");

      if(characterTypes){
        var lowerCase = confirm("Would you like to inlude lowercase characters within the password? \n");
        var upperCase = confirm("Would you like to inlude uppercase characters within the password? \n");
        var specialCharacters = confirm("Would you like to inlude special characters within the password? \n");
        var numericCharacters = 
        //concantenate strings if true into 'selectedChoices.
        
        if(lowerCase){
          //within the container 'password' concantenate the lowercase to the password via random.
        }
        else{
          //Empty container of variable.
         
        }
        if(upperCase){
           //within the container 'password' concantenate the uppercase to the password via random.
        }
        else{
          //Empty container of variable.
         
        }
        if(specialCharacters){
           //within the container 'password' concantenate the variable specialCharacters to the password via random.
        }
        else{
          //Empty container of variable.
         
        }
      }
  }

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
