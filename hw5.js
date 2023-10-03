function returnNumber (a, b) {
    if (a <= b) {
        console.log (a);
      return a;
    } else {
        console.log (b);
      return b
    }
}
returnNumber (10, 5);
//
function evenNumbers(a) {
    if (a%2 === 0) {
        console.log (`Число четное ${a}`)
    } else {
        console.log (`Число нечетное ${a}`)
    }
}
evenNumbers (10);
evenNumbers (7);
//
function square (a) {
    console.log (a**2)
}
function squareReturn (a) {
    return a**2
}
square (5);
console.log (squareReturn (10))
//
function userAgeHandler() {
    let userAge = prompt ('Сколько вам лет?')
    if (userAge < 0) {
        console.log ('Вы ввели неправильное значение')
    } else if (userAge >=0 && userAge<=12) { 
        console.log ('Привет, друг!')
    }
    else {
        console.log ('Добро пожаловать!')
    }
}
userAgeHandler ()
//
function numbers(a , b) {
    if (isNaN(a) || isNaN(b)) {
        console.log ('Одно или оба значения не являются числом');
    } else {
        console.log (a*b);
        return a*b;
    }
}
numbers (8, 5);
//
function cube(a) {
    let userNumber = prompt ('Какое число возвести в куб?')
    if (isNaN(userNumber)) {
        console.log ('Переданный параметр не является числом');
    } else {
        console.log (userNumber**3);
        return userNumber**3;
    }
}
cube();
//
const circle1 = {
    radius: 10,
    getArea: function square1 (params) {
        console.log (3,14*(this.radius**2));
        return 3,14*(this.radius**2);
    },
    getPerimeter: function perimeter (params) {
        console.log (2*3,14*this.radius);
        return 2*3,14*this.radius;
    }
}
circle1.getArea();
circle1.getPerimeter();

const circle2 = {
    radius: 5,
    getArea: function square2 () {
        console.log (3,14*(this.radius**2));
        return 3,14*(this.radius**2);
    },
    getPerimeter: function perimeter () {
        console.log (2*3,14*this.radius);
        return 2*3,14*this.radius;
    }
}
circle2.getArea();
circle2.getPerimeter();


//let a = 5;
//let b = '10';
//console.log (typeof a)
//console.log (typeof +b, +b, isNaN (b))
//сделать проверку на isNaN, чтобы в задание не было букв в значение "верно". Как сделать?