let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById ("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

let model = {
    boardSize: 7,
    numShips: 3, 
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function (guess) {
        for (let i=0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess); //indexOf returns -1 if guess does not match array. 
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit (guess);
                view.displayMessage ("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed...");
        return false;
    },

    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }

                                                                
};

let controller = {
    guesses: 0,

    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                                                this.guesses + " guesses");
            }
        }
        }
    };

    function parseGuess (guess) {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert ("This is not a valid value. Please enter a letter and a number onto the board! :)");
        } else {
            let firstChar = guess.charAt(0);
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("This value is not on the board! >:(");
            } else if (row < 0 || row >= model.boardSize ||
                                column < 0 || column >= model.boardSize) {
                                    alert("This value is off the board!");
                     } else {
                         return row + column;
                     }
            
        }
        return null;
    }


console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));