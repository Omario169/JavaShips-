// assign the location variables of the ship.

let location1 = 3;
let location1 = 4;
let location1 = 5;

//The value for the users guess for the ships location will be left undefined.

let guess;

//values of 0 are given to hits and guesses to keep track of the users score. 

let hits = 0;
let guesses = 0;

//The following variable declares if the ship is sunk or not. If true, the ship has sunken. The value is started as false as the ship will initially be generated.  

let isSunk = false;

//user input 



while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if guess (guess > 6 || guess < 0) {
        alert("Please enter a valid cell number") 
    } else {
        guesses = guesses + 1;
    }
  }

