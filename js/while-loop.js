// var x = 1;
// while (x <= 50){
//     if (x % 2 === 0){
//         console.log(x);
//     } x++;
// }
//
//
//
// function sq(x) {
//     return x * x;
// }
//
//
// while (x <= 10) {
//     console.log("")
// }


//
// function number() {
//     for (var i = 100; i >= -50; i = i + (-10) ) {
//         console.log(i);
//     }
// }
// number();

    function number() {
        for (var i = 1; i <= 100; i++) {
            if (i % 15 === 0) {
                console.log("fizzbuzz");
            } else if (i % 5 === 0){
                console.log("buzz");
            } else if (i % 3 === 0){
                console.log("fizz");
            } else {console.log(i)}

        }
    } number();


for(var i = 1; i < 101; i++){
    if(i % 15 === 0) console.log("FizzBuzz");
    else if(i % 5 === 0) console.log("Buzz");
    else if(i % 3 === 0) console.log("Fizz");
    else console.log(i);
}