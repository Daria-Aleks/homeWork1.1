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