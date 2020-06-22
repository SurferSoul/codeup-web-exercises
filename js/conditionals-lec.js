// "use strict";
//
// console.log("hello from conditionals lec.js!");
//
// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// var isAdmin = false;
// if (isAdmin) {
//     //show the navbar is inside this statement
// }
//
// //TODO Together: Send a 20% off coupon if its users birthday
// var birthday = true;
// if (birthday) {
//     //Send 20% off
// }
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
// if (isRainy) {
//     alert("it is raining")
// }
// //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 300;
// var currentBalance = 200;
// // if(itemCost > )
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 10;
// if (numberOfLives < 0) {
//     alert("Sorry game over");
// }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "snowing"
// if (weather === "snowing") {
//     alert("It's snowing")
// }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 5;
// if (10 < numberInput) {
//     alert("True");
// }
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
// function gameIsOver (numberOfLives) {
//     console.log("Current lives: " + numberOfLives)
//     if (numberOfLives === 0) {
//         alert("Sorry game over")
//     }
// }
//
//
// // =============== IF / ELSE SYNTAX ================
//
// // if(condition){
// //     // code here runs if condition evaluates to true
// // } else {
// //     // code here runs if condition evaluates to false
// // }
//
//
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// // var isAdmin = false;
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
// if (isRainy) {
//     alert("It's raining")
// }   else {
//     alert("Have a nice day")
// }
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
// if (numberOfLives === 0) {
//     alert("Sorry game over")
// } else {
//     alert("Next Level")
// }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's snowing!")
// }   else {
//     alert("Check back later for more details!")
// }
//
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
// if (numberInput > 10) {
//     alert("True")
// }   else{
//     alert("the number is less than 10")
// }


// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// function checkIfGameIsOver(numberOfLives) {
// if (numberOfLives === 0) {
//     return("Sorry game over")
// } else {
//     return("Next Level!")
// }
// }
// console.log(checkIfGameIsOver(0));
//
// //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// let age = function(age) {
//     if (age >= 13) {
//         alert("You may proceed")
//     } else {
//         alert("Sorry, you are not able to proceed")
//     }
// }
// age(4)


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's snowing")
// } else if ( weather === "raining") {
//     alert("It's raining")
// } else {
//     alert("have a nice day")
// }
//
//
// //TODO Together: refactor the above statement as a function
// function checkWeather(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing")
//     } else if ( weather === "raining") {
//         alert("It's raining")
//     } else {
//         alert("have a nice day")
//     }
//
// }
// checkWeather("raining")


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLights(lightColor) {
//
//     if (lightColor === "red") {
//         return ("Please stop!");
//     } else if (lightColor === "yellow") {
//         return ("Prepare to stop");
//     } else if (lightColor === "green") {
//         return ("Please proceed")
//     }
//     else {
//         return ("Please enter a valid color");
//     }
// }
// console.log(trafficLights("green"));


// ================ NESTED STATEMENTS ===============
//TODO Together: 1. If user is under 15, they are not eligible for a learners permit, else they are.
// If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older
// and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
function driverLic(age){
let permit;

    if (age < 15) {
        return ("Not eligible for learners permit.")
    } else {
    } let ageVer = parseInt(prompt ("Please enter your age:"));
        if ( ageVer >= 16) {
            permit = prompt("Do you have a learners permit?")
        } else {
                alert("You need to be 16 to get your license.")
        } if (permit = true) {
        alert("You can have your drivers license.")
        }  else {
            alert("You can't have a drivers license until you get your learners permit.");
        }
}
console.log(driverLic(15));



// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!
// message = (success) ? 'value is true' : 'value is false';
// console.log(message);
// //TODO: Refactor the following conditional as a ternary
//
// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);

// //WRITE YOUR TERNARY STATEMENT HERE!
// weatherMessage = (weather === "rainy") ? "Have a nice day" : "It's raining";
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// let weather = "snow";
//
// switch(weather) {
//     case "rainy":
//         console.log("It is raining");
//         break;
//     case "sunny":
//         console.log("It is sunny");
//         break;
//     case "snow":
//         console.log("It is snowing")
//         break;
//     default:
//         console.log("Check the weather");
// }



//TODO: Rewrite the intersection function from earlier as a switch statement.
// let trafficLight = "red";
//
// switch (trafficLight) {
//     case "red":
//         console.log("Please Stop!");
//         break;
//     case "yellow":
//         console.log("Be ready to stop");
//         break;
//     case "green":
//         console.log("Proceed")
//         break;
//     default:
//         console.log("Please enter a traffic light color: green, yellow or red");
// }

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

