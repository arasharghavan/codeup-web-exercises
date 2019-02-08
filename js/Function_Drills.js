// Make a function named isOdd(number)

function isOdd(number) {
    return number % 2 !== 0 ;

}
console.log(isOdd(3));


// Make a function named isEven(number)

function isEven(number) {
    return number % 2 === 0;

} console.log(isEven(4));

// Make a function named identity(input) that returns the input exactly as pro

function identity(input) {
    return input;
} console.log (identity("Arash"));

// Make a function named isFive(input)

function isFive(input) {
    return input === 5;

} console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5 ;

} console.log (addFive(2));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
     return input % 5 === 0;

} console.log(isMultipleOfFive(10));

// Make a function named isThree(input)

function isThree(input) {
    return input === 3;
} console.log(isThree(3));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return input % 3 === 0;
} console.log (isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    var five = input % 5 === 0;
    var three = input % 3 === 0;
    return five && three;
} console.log(isMultipleOfThreeAndFive(15));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n === 0;

} console.log (isMultipleOf(10, 2));

// Make a function named isTrue(boolean)

function isTrue(boolean) {
    return true === boolean;
} console.log (isTrue(true));

// Make a function named isFalse(boolean)

function isFalse(boolean) {
    return boolean;
} console.log (isFalse(true));

// Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(input) {

    return (input &&  true);
} console.log (isTruthy(0));

