// Gallons to Liters

var gallons = parseInt(prompt("Enter a value in gallons"));

var gallonsToLiters = function(number){
	return number * 3.78541;
}

alert(gallonsToLiters(gallons)+ " liters.");

// Liters to Gallons
var liters = parseInt(prompt("Enter a value in liters"));

var litersToGallons = function(number){
	return number / 3.78541;
}

alert(litersToGallons(liters)+ " gallons.");
