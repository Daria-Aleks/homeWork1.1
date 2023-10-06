//Задание 1
const word = 'js';
const wordUpper = word.toUpperCase();
console.log(wordUpper);
//Задание 2
function searchStart(mass, str) {
    mass = mass.map(e => e.toLowerCase())
    str = str.toLowerCase();
    const massive = [];
    mass.forEach(element => {
        if (element.startsWith(str)){
            massive.push (element)
        }
    });
    return massive;
}
console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко') )
//Задание 3
console.log (Math.floor(32.58884));
console.log (Math.ceil(32.58884));
console.log (Math.round(32.58884));
//Задание 4
console.log (Math.max.apply(null, [52, 53, 49, 77, 21, 32]), Math.min.apply(null, [52, 53, 49, 77, 21, 32]));

//Задание 5
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor (max);
    return Math.floor (Math.random()*(max - min + 1) + min)
}
console.log (random(1, 10));
//Задание 6
function numb(max) {
    min = Math.ceil(0);
    max = Math.floor (max);
    const a = [];
    while (a.length < Math.floor(max/2)) {
        a.push ( Math.floor (Math.random()*(max - min + 1) + min))
    }
    return a;
    
}
console.log (numb(7));
//Задание 7
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomNumber(1, 10));
//Задание 8
const currentDate = new Date();
console.log(currentDate.toLocaleDateString());
//Задание 9 
const currentDate2 = new Date();
const futureDate = new Date(currentDate2.getTime() + (73 * 24 * 60 * 60 * 1000));
console.log(futureDate.toLocaleDateString());
//Задание 10
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    const formattedTime = date.toLocaleTimeString('ru-RU');
    
    return `Дата: ${formattedDate} - это ${formattedDate.split(',')[1].trim()}.\nВремя: ${formattedTime}`;
  }
  const currentDate3 = new Date();
  console.log(formatDate(currentDate3));
//Задание 11
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const shuffledWords = shuffleArray(words);
alert(shuffledWords.join(', '));
const firstWord = prompt('Чему равнялся первый элемент массива?');
const lastWord = prompt('Чему равнялся последний элемент массива?');
if (firstWord === words[0] && lastWord === words[words.length - 1]) {
  alert('Поздравляю, вы угадали оба элемента!');
} else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно.');
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}