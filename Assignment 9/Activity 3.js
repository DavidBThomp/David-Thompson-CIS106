//Converts miles into metric or US units depending on type requested. Then requests if user wants to enter other distances.

main();

function main() {
	do {
		let mile = getMile();
		processDistance(mile);
		choice = pickUnit(yard, foot, inches, kilometer, meters, centimeters);
		repeat = doRepeat();
	} while (repeat == "Y");
}

function getMile() {
	mile = prompt("Input distance in  miles", "20");
	return mile;
}

function processDistance(mile) {
	yard = mile * 1760;
	foot = mile * 5280;
	inches = mile * 63360;
	kilometer = mile * 1.609344;
	meters = kilometer * 1000;
	centimeters = meters * 100;
	return yard, foot, inches, kilometer, meters, centimeters;
}

function pickUnit(yard, foot, inches, kilometer, meters, centimeters) {
	choice = prompt("Would you like that distance in US or metric units?");
	switch (choice) {
		case ('US'):
		case ('us'):
			console.log("That is " + yard + " yards, " + foot + " feet, and " + inches + " inches.");
			break;
		case ('metric'):
		case ('Metric'):
			console.log("That is " + kilometer + " kilometers, " + meters + " meters, and " + centimeters + " centimeters.");
			break;
		default:
			console.log("Please enter \'US\' or \'Metric\'.");
	}
}

function doRepeat() {
	repeat = prompt("Would you like to calculate another distance? (Y)es or (N)o?");
	return repeat;
}
