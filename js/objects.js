
(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Ferdinand",
        lastName: "Marrero",
    };
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return ("Hello from " + this.firstName + " " + this.lastName + "!");
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(buyer) {
        let discount = .12;
        let totalPrice = (buyer.amount - (buyer.amount * discount));
        let saved = buyer.amount - totalPrice;

    if (buyer.amount > 200) {
        console.log(buyer.name + ", you've got a discount! The total price is $" + buyer.amount.toFixed(2) + ", your" +
            " total with discount is" + " $" + totalPrice.toFixed(2) + "." + " You saved $" + saved.toFixed(2));
    } else {
        console.log( buyer.name + ", your total is $" +  buyer.amount.toFixed(2) + ", you didn't get a discount.");
    }

    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "El Alquimista",
            author: {
                firstName: "Pablo",
                lastName: "Cohelo"
            }
        },
        {
            title: "La Carreta",
            author: {
                firstName: "René",
                lastName: "Marqués"
            }
        },
        {
            title: "Don Quixote",
            author: {
                firstName: "Miguel",
                lastName: "de Cervantes"
            }
        },
        {
            title: "The Secret",
            author: {
                firstName: "Rondha",
                lastName: "Byrnes"
            }
        },
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
            }
        },

    ];
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    console.log(books)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// I can do this with multiple console.logs
    books.forEach(function (bookInfo) {
        console.log("Book # " + (books.indexOf(bookInfo)+1) + "\n"  + "Title: " + bookInfo.title + "\n" +  "Author: "
            +(bookInfo.author.firstName + " " +  bookInfo.author.lastName) + "\n" + "---");
    })



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    let createBook = function (title, firstName, lastName) {
        let book = {};
        book.title = title;
        book.author ={};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
        //also => return {title: title, author: {firstName, lastName}};
    }
    let showBookInfo = function (book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }

    let books2 = [];
    books2.push(createBook("Moby Dick", "Herman", "Melville"));

    books2.forEach((showBookInfo));

    // let showBookInfo = function(book, index) {

})();
