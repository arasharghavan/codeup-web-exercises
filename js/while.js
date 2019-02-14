var i = 2;
while (i <= 65536){
	console.log(i);
	i = i * 2;
}


// -------------------------------------------------


function iceCream(){
	var allCones = Math.floor(Math.random() * 50) + 50;

	do{
		var orderCones = Math.floor(Math.random() * 5) + 1;

		if (allCones > orderCones) {
			allCones = allCones - orderCones;
			console.log("i sold " + orderCones + " i have " + allCones);

		} else if (allCones === orderCones) {
			allCones = allCones - orderCones;
			console.log("i had " + orderCones + " i sold " + orderCones + " its all sold :)");
			break;

		} else if (allCones < orderCones){
			console.log("cannot sell " + orderCones + " i only have " + allCones);

		}

}	while(allCones >= 0);

} iceCream();
