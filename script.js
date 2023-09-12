// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "1234567890";
    var specialCharacters = "!@#$%^&*()-_+=<>?";
    var numOfCharacters;
    var characterTypes;
    var index;
    var selectedChoices = "";
    var password = "";
    //TODO (9/8/2023)
    //Plan is to add all selected choices into container selectedChoices then randomize it after user choices.
   do{
    numOfCharacters = prompt("Enter the length of characters(Between 8 and 128 characters): \n");
  
    if(numOfCharacters >= 8 && numOfCharacters <= 128) {
    characterTypes = confirm("Would you like to include character types(press 'ok' for yes)?: \n");
      
      if(characterTypes){
        //concantenate strings if true into 'selectedChoices.
        
        if(confirm("Would you like to include uppercase characters?")){
          //within the container 'password' concantenate the lowercase to the password via random.
          selectedChoices += upperCase;
        }
        if(confirm("Would you like to include uppercase characters?")){
           //within the container 'password' concantenate the uppercase to the password via random.
           selectedChoices += lowerCase;
        }
        if(confirm("Would you like to include numeric characters?")){
          selectedChoices += numericCharacters;
        }
        if(confirm("Would you like to include special characters?")){
           //within the container 'password' concantenate the variable specialCharacters to the password via random.
           selectedChoices += specialCharacters;
        }
        break;
    }
    else if (!upperCase && !lowerCase && !numericCharacters && !specialCharacters) {
      console.log("You must select at least one choice \n");
      continue;
    }
  }
else {
  console.log("The password length must be between 8 and 128, please try again. \n");
  continue;
}
}while(true);


  //randomize selected choices

  for (var i = 0; i < numOfCharacters; i++) {
    /*This line of code is where I will include the math.random and/or math.floor function
    to randomize selectedChoices then place the 
    selectedChoices container into the container password then return password.*/
    var index = Math.floor(Math.random() * selectedChoices.length);
    password += selectedChoices.charAt(index);
  }
  return password;
}//function closing.


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
