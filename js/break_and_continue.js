
function num(){
var number = prompt("an odd number between 1 and 50?");
while ((number % 2 === 0) || (number > 50) || isNaN(number)) {
  number = prompt("an odd number between 1 and 50?");
}

console.log("the random number is " + number);

for (var i = 0; i < 50; i++) {

	if (i % 2 === 0) {

	} else if(i === +number){
		console.log ("Yikes! Skipping number: " + number);
	} else {console.log("Here is an odd number: " + i);}
}
}num();
