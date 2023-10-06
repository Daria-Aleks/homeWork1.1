function game() {
    let userAnswer = prompt ('Какое время года под номером месяца ...?')
    if (userAnswer == 3 || userAnswer == 4 || userAnswer == 5) {
        alert ('Весна')
    } else if (userAnswer == 6 || userAnswer == 7 || userAnswer == 8){ 
        alert ('Лето') }
        else if (userAnswer == 9 || userAnswer == 10 || userAnswer == 11){ 
            alert ('Осень')}
            else if (userAnswer == 12 || userAnswer == 1 || userAnswer == 2){ 
                alert ('Зима')}
                else {
                    alert('Такого месяца у нас нет, солнце')
                }
}

function words() {
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
}