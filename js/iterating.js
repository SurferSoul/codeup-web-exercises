(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["Fer", "Jen", "Noah", "Sam"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]); // 1
    console.log(names[1]); // 2
    console.log(names[2]); // 3
    console.log(names[3]); // 4)
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(let i = 0; i<1; i++) {
    console.log("This are the names " + names)
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("The names in the array are: ")
    names.forEach(function(names) {
        console.log(names);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *

     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let element = [1, 2, 3, 4, 5]

    let first = function(ele) {
        return ele[0];
    }

    let second = function(ele) {
        return ele[1];
    }

    let last = function(ele) {
        return ele[ele.length-1];
    }
    console.log("The first element is: " + first(element));
    console.log("The first element is: " + second(element));
    console.log("The first element is: " + last(element));

    let val = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    console.log(val.length)
    val.unshift("sunday");
    val.push("Saturday")



})();
