// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
//
// var name = prompt("what is your name?")
// var answer;
// function makeNameMessage(input) {
//     if ((input !== input.trim()) || (!(isNaN(input)))){
//         alert("INVALID INPUT");
//     } else if (input === "justin"){
//             answer = "It's Justin!";
//          } else {answer = "It's not Justin";}
//     alert(answer);
//
// } makeNameMessage(name);
//     __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//
//     var color = prompt("what color is the street light?").toLowerCase();
//     var answer;
//
//     function light_color(input) {
//         if (input === 'red'){
//             answer = "STOP!";
//         } else if (input === 'green'){
//             answer = "go!";
//         } else if (input === 'yellow'){
//             answer = "be ready for stop!";
//         } else {answer = "its not a right color!";}
//         alert(answer);
//     } light_color(color);




// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
//
//
//     var text = prompt("give me me some inputs!");
//     var answer;
//
//     function simple(input) {
//        if (input === ""){
//            answer = "no input provided."
//        } else {answer = input;}
//         alert(answer);
//     } simple(text);
//
//

// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//
//     var number =  prompt("enter one digit number only!");
//     var answer;
//
//     function one_digit(input) {
//         if (isNaN(input) || input === "" || input !== input.trim()){
//             answer = "invalid input";
//         } else if (input.length !== 1 ){
//             answer = "too many digits";
//         } else { answer = "number is valid!";}
//         alert(answer);
//     } one_digit(number);


// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
//




// var weekDay = prompt("What is your favorite day of the week?").toLowerCase();
// var answer;
//
// function favoriteDays(input) {
//     if (input === input.trim() && (input.substring(0, 3) === "mon" || input.substring(0, 3) === "tue" || input.substring(0, 3) === "sun" || input.substring(0, 3) === "wed" || input.substring(0, 3) === "thu" || input.substring(0, 3) === "fri" || input.substring(0, 3) === "sat")){
//         answer = input +  " is my favorite day to!";
//     } else {answer = "this is not week day!";}
//     alert(answer);
//
// } favoriteDays(weekDay);



// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//
//     var number = prompt("enter a number!");
//     var answer;
//
//     function userNumber(input) {
//         if(input === "" || input !== input.trim()){
//             answer = "its not a number!";
//         } else{(isNaN(input) ? answer = "its not a number!" : answer = "it is a number!");}
//             alert(answer);
//     } userNumber(number);




// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter).
// The function then alerts the months available in that season and then asks the user to pick a given month.
// After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

 var seasons = prompt("Spring, Summer, Fall, Winter. which one do you like?").toLowerCase();
        if (seasons === "spring"){var spring = prompt("these are the months in this season chose one! january - february - march").toLowerCase();}
        else if (seasons === "summer"){ var Summer = prompt("these are the months in this season chose one! april - may - june").toLowerCase();}
        else if (seasons === "fall"){var Fall = prompt("these are the months in this season chose one! july - august - september").toLowerCase();}
        else if (seasons === "winter"){var Winter = prompt("these are the months in this season chose one! october - november - december").toLowerCase();}
        else {alert("input is wrong");}
 var answer;

        function seasonToPic(sp, sum, fal, win) {
            if (sp.substring(0, 3) === "jan" || sp.substring(0, 3) === "feb" || sp.substring(0, 3) === "mar"){
                answer = sp + " my month!";
            } else if (sum.substring(0, 3) === "apr" || sum.substring(0, 3) === "may" || sum.substring(0, 3) === "jun"){
                answer = sum + " my month!";
            } else if (fal.substring(0, 3) === "jul" || fal.substring(0, 3) === "aug" || fal.substring(0, 3) === "sep"){
                answer = fal + " my month";
            } else if (win.substring(0, 3) === "oct" || win.substring(0, 3) === "nov" || win.substring(0, 3) === "dec"){
                answer = win + " my month";
            } else {answer = "somthing iscnwibwcvh ";}
         alert(answer);}


        seasonToPic(spring, Summer, Fall, Winter)




// GOLD STAR BONUS
//
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units