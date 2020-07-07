"use strict"

// Create a file named break_and_continue.js in the js directory.
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user
// if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let oddNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));
if (oddNumber % 2 !== 0 && 0 < oddNumber && oddNumber < 50) {
    console.log("The number to skip is " + oddNumber);
}
for (let i = 0; i < 50; i++) {
    if (oddNumber % 2 === 0 || oddNumber < 0 || oddNumber > 50) {
        console.log("Please enter a valid odd number");
        break;
    }
    if (oddNumber === i) {
        console.log("*** The skipped number is " + oddNumber+ " ***")
    }
    if (i % 2 === 0) {
        continue;
    }
    console.log('Here is an odd number: ' + i);
}
