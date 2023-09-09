// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  while(true){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=<>?";
    var numOfCharacters;
    var amountOfNumbers;
    var characterTypes;
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!@#$%^&*()-_+=<>?";
    var password = "";
    //TODO (9/8/2023)
    //Plan is to create random versions of lower, upper, special containers then concantenate them at the end for password.
    
    var numOfCharacters = prompt("Enter the length of characters(Between 8 and 128 characters): \n");
    
    if(numOfCharacters >= 8){
      if(numOfCharacters <= 128){
      var characterTypes = confirm("Would you like to include character types(press 'ok' for yes)?: \n");

      if(characterTypes){
        var lowerCase = confirm("Would you like to inlude lowercase characters within the password? \n");
        var upperCase = confirm("Would you like to inlude uppercase characters within the password? \n");
        var specialCharacters = confirm("Would you like to inlude special characters within the password? \n");
        
        if(lowerCase){
          //within the container 'password' concantenate the lowercase to the password via random.
        }
        else{
          //Not break, but something else.
          break;
        }
        if(upperCase){
           //within the container 'password' concantenate the uppercase to the password via random.
        }
        else{
          //Not break, but something else.
          break;
        }
        if(specialCharacters){
           //within the container 'password' concantenate the variable specialCharacters to the password via random.
        }
        else{
          //Not break, but something else.
          break;
        }
      }
      //TODO fix code below (9/6/2023).
      // else {
      //   //skip the character types
      // }
    
      // else {
      //   console.log("Invalid input. Please try again.");
      //   continue;
      // }
    }
    }
    //else for the conditioning for the ranges of characters.
    else {
      console.log("Number of characters aren't within range(8 <= x <= 128). Please try again.");
      continue;
    }
  }//while loop closing
  //May need to use loop to include loop for the math.random function.
  var amountOfNumbers = prompt("Enter the amount of numbers you would like to have in the password: \n");
  if(){
    for(i = 0; i <= amountOfNumbers ; i++){

    }
  }
  else{
    console.log("Input must include numbers");
  }
  //concatenate strings and variables for the password.
  console.log("");
}//function closing

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
