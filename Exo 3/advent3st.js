const fs = require("fs");
const arrayOfInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");
  // @see string to number conversion https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
for(let i = 0; i < arrayOfInput.length; i++) {
  let line = arrayOfInput[i].split(" ");
	let numberOfOccurence = line[0];
	let lettre = line[1];
	let password = line[2];

	lettre = lettre.substring(0,lettre.length-1);
	let numberMin = numberOfOccurence.substring(0, numberOfOccurence.indexOf('-'));
	let numberMax = numberOfOccurence.substring(numberOfOccurence.indexOf('-')+1, numberOfOccurence.length);
	console.log(numberOfOccurence);
	console.log(numberMin);
	console.log(numberMax);
	//console.log(letter);

//	blublu[1].replace(':','');
}