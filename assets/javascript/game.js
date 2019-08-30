//Game.js

var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];
var guessedLettersElement =  document.getElementById("guessedLetters")
var guessesRemainingElement = document.getElementById("guessesRemaining");
var lossCountElement = document.getElementById("lossCount");
var winCountElement = document.getElementById("winCount")
var computerGuess = generate_random_string();
console.log(computerGuess);

function generate_random_string(string_length){
        let random_string = '';
        let random_ascii;
        let ascii_low = 65;
        let ascii_high = 90
            random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
            random_string += String.fromCharCode(random_ascii).toLowerCase()
        return random_string
    }
    
   

    
   // var userGuess = "";
    //guessedLetters = "";

     document.onkeyup = function(event) {
     var userGuess = event.key;
     guessedLetters.push(userGuess);
     console.log(userGuess)

      // document.onkeypress = function (event) {
      // var userGuess = event.key;
  
      // // I'm doing something wrong here... onkeypress is not pushing to guessUsed //
      // guessedLetters.push(userGuess);
      // console.log("player guess: " + userGuess);
      // console.log(guessedLetters)

      if (guessesRemaining <= 0){
        lossCount++;
        console.log("lossCount " + lossCount);
        lossCountElement.innerHTML = lossCount++;
        console.log("lossCount " + lossCount);
        guessesRemaining = 10;
        guessedLetters=[];
        guessedLettersElement.innerHTML.value = guessedLetters;
        guessesRemainingElement.innerHTML = 10;
        computerGuess = generate_random_string();
      }   
         console.log(guessedLetters);
        //  document.getElementById("guessedLetters").innerHTML = guessedLetters;
        guessedLettersElement.innerHTML = guessedLetters;

        if (userGuess === computerGuess){          
          console.log("You won");
          guessedLettersElement.innerHTML.value = guessedLetters;
          winCountElement.innerHTML = winCount++;
          guessedLetters=[];
          guessedLettersElement.innerHTML.value = guessedLetters;
          computerGuess = generate_random_string();
          console.log(computerGuess);
          guessesRemaining = 10;
          guessesRemainingElement.innerHTML = 10;
        }else {
          console.log("Guess again!");
          guessesRemainingElement.innerHTML = guessesRemaining--;
          guessedLettersElement.innerHTML.value = guessedLetters;
          computerGuess = generate_random_string();
        }
      }