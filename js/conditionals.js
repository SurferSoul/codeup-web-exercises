// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
function analyzeColor(color) {
    if (color === "blue") {
        return ("blue is the color of the sky");
    } else if (color === "red") {
        return ("Strawberries are red");
    } else if (color === "cyan") {
        return ("I don't know anything about cyan");
    } else {
        return ("Please enter blue, red or cyan.")
    }
}
console.log(analyzeColor("blue"));

// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// //

// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
function analyzeColor(randomColor) {
    if (randomColor === "blue") {
        console.log("blue is the color of the sky");
    } else if (randomColor === "red") {
        console.log("Strawberries are red");
    } else if (randomColor === "cyan") {
        console.log("I don't know anything about cyan");
    } else {
        console.log("Please enter blue, red or cyan.")
    }
}
console.log(analyzeColor(randomColor));
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
let analyzeColors = randomColor;
switch(analyzeColors) {
    case "red":
        console.log("red like apple");
        break;
    case "orange":
        console.log("orange is orange");
        break;
    case "yellow":
        console.log("yellow like the sun")
        break;
    case "green":
        console.log("grass is green")
        break;
    case "blue":
        console.log("blue like the sky")
        break;
    case "indigo":
        console.log("Indigo???")
        break;
    case "violet":
        console.log("violet is a pretty color")
        break;
    default:
        console.log("Don't know what is that color");
}
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
let userColor = prompt("Please pick a color")
  function analyzeColor(userColor) {
  }
alert("Your color is " + userColor)
// //
//
//
//
//
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
//
 function calculateTotal(luckyNumber, totalAmount) {
    // let Number = Math.floor(Math.random() * 5)
    let total1 = totalAmount - (totalAmount *.10);
    let total2 = totalAmount - (totalAmount *.25);
    let total3 = totalAmount - (totalAmount *.35);
    let total4 = totalAmount - (totalAmount *.50);

     switch (luckyNumber) {

         case 0:
             console.log("You got no discount your total is $" + totalAmount.toFixed(2));
             break;
         case 1:
             console.log("You got 10% discount! Your total is $" + total1.toFixed(2))
             break;
         case 2:
             console.log("You got 25% discount! Your total is $" + total2.toFixed(2));
             break;
         case 3:
             console.log("You got 35% discount! Your total is $" + total3.toFixed(2));
             break;
         case 4:
             console.log("You got 50% discount! Your total is $" + total4.toFixed(2));
             break;
         case 5:
             console.log("You'll get all for free!");
             break;
         default:
             console.log("That is not a number")
     }
 }
 console.log(calculateTotal(0, 100));
//
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
 function calculateTotal(luckyNumber, totalBill) {
     //Local Variables

     totalBill = parseFloat(prompt("What is you total bill?"));
     luckyNumber = Math.floor(Math.random() * 6);
     let total1 = totalBill - (totalBill *.10);
     let total2 = totalBill - (totalBill *.25);
     let total3 = totalBill - (totalBill *.35);
     let total4 = totalBill - (totalBill *.50);

     switch (luckyNumber) {
         case 0:
             alert("Your lucky number was " + luckyNumber + ", sorry you got no discount, your total bill is $" +
                  + totalBill.toFixed() + ".")
             break;
         case 1:
             alert("Your lucky number was " + luckyNumber + ", your total bill before discount was $" + totalBill.toFixed(2) + " ," +
                 " your new price including the discount is $" + total1.toFixed(2));
             break;
         case 2:
             alert("Your lucky number was " + luckyNumber + ", your total bill before discount was $" + totalBill.toFixed(2) + " ," +
                 " your new price including the discount is $" + total2.toFixed(2));
             break;
         case 3:
             alert("Your lucky number was " + luckyNumber + ", your total bill before discount was $" + totalBill.toFixed(2) + " ," +
                 " your new price including the discount is $" + total3.toFixed(2));
             break;
         case 4:
             alert("Your lucky number was " + luckyNumber + ", your total bill before discount was $" + totalBill.toFixed(2) + " ," +
                 " your new price including the discount is $" + total4.toFixed(2));
             break;
         case 5:
             alert("Your lucky number was " + luckyNumber + ", your total bill before discount was $" + totalBill.toFixed(2) + " ," +
                 " your new price including the discount is $0.00!!!");
             break;
     }
 }
calculateTotal();


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function myConfirmFunc() {
    //Confirm yes/no Pop-up
    let number = (confirm("Do you want to enter a number?"));
    let numPrompt;
    let evenNum;

        //First Alert
    if (number) {
        numPrompt = parseInt(prompt("Please enter a number"));
    } else {
        return;

    }if (isNaN(numPrompt)){
        alert("You did not entered a number")
        return;

    } if (numPrompt % 2 === 0) {
        alert(numPrompt + " is even");
        } else {
        alert(numPrompt + " is odd");

        //Second Alert
    } if (number) {
        //had to insert the variable here because it was reading it as NaN
        let total= numPrompt + 100
        alert("Your number + 100 is " + total);

        //Third Alert
    } if (numPrompt >= 0) {
        alert(numPrompt + " is a positive number");
    } else {
        alert(numPrompt + " is a negative number");
    }
}
myConfirmFunc();




