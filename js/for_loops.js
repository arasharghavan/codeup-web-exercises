function showMultiplicationTable(input){

	for (var i = 1, j = input, h = input; i < 11; i++, h = j * i) {
		console.log (j + " X " + i + " = " + h);
	}
} showMultiplicationTable(5);







function numbers(){

for (var i = 1; i < 11; i++) {
	var random = Math.floor(Math.random() * 200) + 20;
	console.log("number of lop " + i);
	if (random % 2 === 0) {
		console.log(random + " is even");
	} else {console.log(random + " is  odd");}

}

} numbers();









for (var i = 1; i < 10; i++) {

	console.log((""+i).repeat(i));
}








for (var i = 100; i > 4; i = i - 5) {
	console.log(i)
}


