//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
};
//Задание 2
const numbs2 = [1, 5, 4, 10, 0, 3];
numbs2.forEach((el, index) => {
	if (el == 4) {
		console.log(`${index}: ${el}`);
	}
});
//Заданиe 3
 let numbs3 = [1, 3, 5, 10, 20];
 numbs3 = numbs3.join (' ');
 console.log (numbs3);
 //Задание 4
const numbs4 = [];
while (numbs4.length < 3) {
	const numbsSub = [];
	while (numbsSub.length < 3) {
		numbsSub.push(1);
	}
	numbs4.push(numbsSub);
}
console.log (numbs4);
//Задание 5
numbs5 = [1, 1, 1];
numbs5.push (2, 2, 2);
console.log (numbs5);
//Задание 6
numbs6 = [9, 8, 7, 'a', 6, 5];
numbs6 = numbs6.sort();
console.log (numbs6.pop());
console.log (numbs6);
//Задание 7
const numbers = [9, 8, 7, 6, 5];
const userInput = +(prompt("Введите число"));
let isGuessed = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === userInput) {
    isGuessed = true;
    break;
  }
}
if (isGuessed == true) {
  alert("угадал");
} else {
  alert("не угадал");
}
//Задание 8
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
letters = letters.reverse().join('')
console.log (letters);
//Задание 9 
const numbs9 = [[1, 2, 3,],[4, 5, 6]];
const numbs9New = [];
for (let numb of numbs9) {
	for (let element of numb){
		numbs9New.push (element)
	}
}
console.log (numbs9New);
//Задание 10
const numb10 = [1, 2, 4, 6, 7];
for (let i = 0; i < numb10.length-1; i++){
	let numb222 = numb10[i]+numb10[i+1]
	console.log (numb222)
}
//Задание 11
function square (mass){
	const squares = mass.map (el => el**2)
	return squares;
}
console.log (square([1,2,3]));
//Задание 12
function getLengthWords (mass){
	const len = mass.map (el => el.length)
	return len;
}
console.log (getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
//Задание 13
function filterPositive(array) {
	const positive = array.filter (el => el < 0)
	console.log (positive);
	return positive;
  }
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]); 
