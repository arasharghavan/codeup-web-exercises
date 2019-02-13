"use strict";

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
 */
    var response = confirm("would you like to enter a number?");
    var answer;

    if (response){
        var number = prompt("ok! what is the number?" );
        if(number >= 0 || number < 0){
            if (number % 2 === 0) {
                answer = "your number is even";
            } else {
                answer = "your number is odd";
            }
            alert(answer);

            alert(+number + 100);

            if (number >= 0 ){
                answer = "your number is positive";
            } else {
                answer = "your number is negative";
            }
            alert(answer);
        } else {alert("your input is not a number!!!")}

    } else {alert("ok bye!!!");}



/* Can you refactor your code to use functions?################################################ */



    var response1 = confirm("would you like to enter a number?");
    var answer1;
    function userNumbers(input) {

                        if (input) {
                            var number = prompt("ok! what is the number?");
                            if (number >= 0 || number < 0) {
                                if (number % 2 === 0) {
                                    answer1 = "your number is even";
                                } else {
                                    answer1 = "your number is odd";
                                }
                                alert(answer1);

                                alert(+number + 100);

                                if (number >= 0) {
                                    answer1 = "your number is positive";
                                } else {
                                    answer1 = "your number is negative";
                                }
                                alert(answer1);
                            } else {
                                alert("your input is not a number!!!")
                            }

                        } else {
                            alert("ok bye!!!");
                        }

    } userNumbers(response1);



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


// var randomColor = prompt("The random color is ?");
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
    function analyzeColor1(input) {
        if(input ==='red'){
            console.log("blood is red");
        } else if (input ==='orange'){
            console.log("orange is orange");
        } else if (input ==='yellow'){
            console.log("banana is yellow");
        }  else if(input ==='green'){
            console.log("grass is green");
        } else if(input ==='blue'){
            console.log("sky is blue");
        } else if (input ==='indigo'){
            console.log("indigo is kind of purple");
        } else if (input ==='violet'){
            console.log("violet is kind of color that i dont know of");
        } else{
            console.log("this color is not on the list");
        }
    }   analyzeColor1(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
    var userColor = prompt("what color do you like?")
    var answer2;

    function analyzeColor(input) {
        switch (input) {
            case 'red' :
                answer2 = "blood is red";
                break;
            case 'orange' :
                answer2 = "orange is orange";
                break;
            case 'yellow' :
                answer2 = "banana is yellow";
                break;
            case 'green' :
                answer2 = "grass is green";
                break;
            case 'blue' :
                answer2 = "sky is blue";
                break;
            case 'indigo' :
                answer2 = "indigo is the color ";
                break;
            case 'violet' :
                answer2 = "violet is the color";
                break;
            default :
                answer2 = "i dont know about thus color";
        }
        alert(answer2);

    }   analyzeColor(userColor);



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
    var lNumber = prompt("what is your lucky number?");
    var tAmount3 = prompt("what is your total amount? $");
    var answer3;
    function calculateTotal3(lucky, bill) {
        if ((lucky >= 0) && (bill > 0 ) && (lucky <= 5)){
          if (lucky <= 1 ){
              answer3 = "your bill is $" + (bill - (((lucky * 10) * bill)/100));
          } else if (lucky <= 3) {
              answer3 = "your bill is $" +  (bill - ((((lucky * 10) + 5) * bill)/100));
          } else if(lucky === 4){
              answer3 = (bill / 2);
          } else {answer3 = ("you'll get all for free!.");}
        } else {alert("input is wrong!!!");}
        alert(answer3);
} calculateTotal3((+lNumber), (+tAmount3));




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var tAmount = prompt("what is your total amount? $");


var answer4;
function calculateTotal(lucky, bill) {
    if ((lucky >= 0) && (bill > 0 ) && (lucky <= 5)){
        if (lucky <= 1 ){
            answer4 ="your lucky number is " + lucky + " your bill before discount was $" + bill + " your bill after discount is $" + (bill - (((lucky * 10) * bill)/100));
        } else if (lucky <= 3) {
            answer4 ="your lucky number is " + lucky + " your bill before discount was $" + bill + " your bill after discount is $" + (bill - ((((lucky * 10) + 5) * bill)/100));
        } else if(lucky === 4){
            answer4 ="your lucky number is " + lucky + " your bill before discount was $" + bill + " your bill after discount is $" + (bill / 2);
        } else {answer4 ="your lucky number is " + lucky + " your bill before discount was $" + bill + " your bill after discount is $ 0.00" + " you'll get all for free!.";}
    } else {alert("input is wrong!!!");}
    alert(answer4);
} calculateTotal((+luckyNumber), (+tAmount));
