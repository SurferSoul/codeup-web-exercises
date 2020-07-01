"use strict"

let showMultiplicationTable = function (number) {
    for (let i = 1; i <= 10; i++ ) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}
showMultiplicationTable(2);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even. For example:



for (let i = 1; i <= 10; i++) {
    let random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0) {
        console.log(random + " is an even number")
    } else {
        console.log(random + " is an odd number")
    }
}

//Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

let growingByOne = function () {
    for (let i = 1; i <= 9; i++) {
        if (i === 1) {
            console.log(i);
        }
        if (i === 2) {
            console.log(i, i);
        }
        if (i === 3) {
            console.log(i, i, i)
        }
        if (i === 4) {
            console.log(i, i, i, i);
        }
        if (i === 5) {
            console.log(i, i, i, i, i);
        }
        if (i === 6) {
            console.log(i, i, i, i, i, i);
        }
        if (i === 7) {
            console.log(i, i, i, i, i, i, i);
        }
        if (i === 8) {
            console.log(i, i, i, i, i, i, i, i);
        }
        if (i === 9) {
            console.log(i, i, i, i, i, i, i, i, i);
        }
        if (i === 10) {
            console.log(i, i, i, i, i, i, i, i, i, i);
        }
    }
}
growingByOne();

//Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

let minusFive = function () {
    let number = 100
for(let i = 0; i < 20; i++){
    console.log(number - (5 * i))
    }
}
minusFive();



