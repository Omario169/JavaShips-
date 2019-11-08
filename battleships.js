// * by 5 will give us numbers between 0 and 5, not including 5. Math floor function will round these numbers to the closest integers. 
var randomLoc = Math.floor(Math.random() * 5);

// assign the location variables of the ship.

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

//The value for the users guess for the ships location will be left undefined.

var guess;

//values of 0 are given to hits and guesses to keep track of the users score. 

var hits = 0;
var guesses = 0;

//The following variable declares if the ship is sunk or not. If true, the ship has sunken. The value is started as false as the ship will initially be generated.  

var isSunk = false;

//user input 



while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else { 
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT");
            hits = hits + 1;
            

            if (hits == 3) {

                isSunk = true;

                alert ("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
        
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3/guesses);

alert (stats);
		

