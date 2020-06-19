console.log("Hello from external JS!");

alert("Welcome to my Website!");

let color = prompt("What's your favorite color?");
alert(color + " is my favorite color too!");


//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
//and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much
// will you have to pay?
alert("Welcome to E-rental!");
//***parseInt should be in front of the prompt***
let moviePrice = 3;
let movie1 = parseInt(prompt("For how many days you want to rent Little Mermaid?"));
let movie2 = parseInt(prompt("For how many days you want to rent Brother Bear?"));
let movie3 = parseInt(prompt("For how many days you want to rent Hercules?"));
let totalPrice = ((movie1) + (movie2) + (movie3)) * moviePrice;
alert("Your total price is $" + totalPrice);



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
// per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = parseInt(prompt("How many hours did you worked at Google this week?"));
let amazonPay = parseInt(prompt("How many hours did you worked at Amazon this week?"));
let facebookPay = parseInt(prompt("How many hours did you worked at Facebook this week?"));
let totalPay = ((googlePay * 400) + (amazonPay * 380) + (facebookPay * 350));
alert("Your total price is $" + totalPay);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her
// current schedule.

let ClassFull = confirm("Is the class full?");
let scheduleConflict = confirm("Do you have a schedule conflict?");

  if (ClassFull || scheduleConflict) {
    alert("Sorry, you can't enroll because the class is full");
  }
  else {
      alert("Welcome to the class!");
  }



//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
let applyOffer;
moreThanTwo = prompt("Are you going to buy more than two items")
notExpired = prompt("Does the offer expired?")
member = prompt("Are you a member?");

let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired.");
let isPremiumMember = confirm("Press OK if you are a premium member");
alert("Offer Applied: " + (isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember)));