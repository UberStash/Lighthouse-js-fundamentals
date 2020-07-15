
let prompt = require("prompt-sync")();



let guessedAlready = false;
let listGuess = [];
const answer = 25;
let guess;

const compare = function (answer) {
  alert('INSTRUCTIONS --- Enter a number to guess the MAGIC NUMBER....You have 5 tries so makem count!');
  for (i = 0; i < 5; i++) {
    guess = (prompt('what is your Guess?'));
    if (guess === 'exit') {
      return;
    }
    guess = parseInt(guess);



    if (guess === answer) {
      alert(`You are correct!!! It took you ${listGuess.length + 1} Times`);
      return;
    } else if (isNaN(guess)) {
      alert('Please Guess a Number!!!');
    } else {
      for (let i = 0; i < listGuess.length; i++) {
        if (listGuess[i] === guess) {
          alert('you already guessed that');
          guessedAlready = true;
        } 
        
      }
            if (guess > answer && guessedAlready === false) {
            alert('Too High Guess Again HAHAHAHAHA!!!!');
            
          } else if (guess < answer && guessedAlready === false) {
            alert('Too Low Guess Again HAHAHAHAHA!!!!');
            
          }
    }


    listGuess.push(guess);

  }

  alert('You are out of turns GAME OVER!');

}



compare(25);