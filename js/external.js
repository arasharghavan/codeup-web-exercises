"use strict";


var howmuch_per_day = prompt("How much is it per day?");
var little_mermaid = prompt("How many days for Little Mermaid?");
var brother_bear = prompt("How many days for Brother Bear?");
var hercules = prompt("How many days for Hercules?");

var days = Number(little_mermaid) + Number(brother_bear) + Number(hercules);
var price = Number(howmuch_per_day);
var total = price * days;

alert("your total amount is :$" + total.toFixed(2) + " and your total days are " + days + " days");

// next

var google_hours = prompt("How many hours did you worked for google?");
var google_income = Number(google_hours) * 400;

var amazon_hours = prompt("How many hours did you worked for amazon?");
var amazonm_income = Number(amazon_hours) * 380;

var facebook_hours = prompt("How many hours did you worked for facebook?");
var facebook_income = Number(facebook_hours) * 350;

var total_hours = (google_income/400) +  (amazonm_income/380) + (facebook_income/350);
var total_income = google_income + facebook_income + amazonm_income;

alert("Your total hours for this week is: " + total_hours +" hours" + " and your total income for this week is: $" + total_income);

// next

var class_not_full = confirm("Is there room for more student in the class?");
var conflict = confirm("The class schedule does not conflict with student's current schedule!");

var results = conflict  && class_not_full;
alert(results);

// next

var offer_valid = confirm("Offer still available");
var two_items = confirm("It's more than two items in shopping cart");
var membership = confirm("Customer is a member");

var offer_result = offer_valid && (two_items || membership);
alert(offer_result);

// next






