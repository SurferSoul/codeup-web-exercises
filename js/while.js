"use strict"
let doubleNumber = 2
while(doubleNumber <= 16) {
    console.log(Math.pow(2,doubleNumber))
    doubleNumber++;
}



//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
// number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your
// code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// This is a way get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
do {
    // This expression will generate a random number between 1 and 5
    let sold = Math.floor(Math.random() * 5) + 1;
    if (sold > allCones) {
        console.log("Ooops...I can't sell you " + sold + " because I have " + allCones + " left");
    } else {
        allCones = allCones - sold;
        console.log("I just sold " + sold + " cones! " + allCones + " more to go!");
    }
} while (allCones > 0) {
        console.log("We sold everything")
    }


