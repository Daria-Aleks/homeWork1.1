let userPassword = prompt('Введите пароль');
let message = 'helpmepls';
if (userPassword === message) { 
    message = 'Пароль введен верно';
} else {
    message = 'Пароль введен неправильно';
}
alert (message);
//
let c = prompt('Введите число от 0 до 10');
if (c>0 && c<10) {
    message = 'Верно';
} else {
    message = 'Неверно';
}
alert (message);
//
let e = 10;
let d = 3;
if (e>100||d>100) {
    message = 'Верно';
    
} else {
    message = 'Неверно';
}
alert (message);
//
let a = '2';
let b = '3';
alert (Number(a) + Number(b));
//
let monthNumber = prompt('Введите номер месяца')
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log("Зима");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Весна");
        break;
    case '6':
    case '7':
    case '8':
        console.log("Лето");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Осень");
        break;
    default:
    case (monthNumber>=13):
        console.log(Невермесяц);
        break;
}