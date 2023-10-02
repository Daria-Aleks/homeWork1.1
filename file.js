let i = 0;
while (i<2) {
    console.log ('Привет');
    i++;
}
//
let a = 1;
while (a<=5) {
    console.log (a);
    a++;
}
//
let b = 7;
while (b<=22) {
    console.log (b);
    b++;    
}
//
let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}
//
let num = 0;
let n = 1000;
while (n>50) {
    num++;
    n/=2;
}
console.log ('Количество циклов -', num, 'получившееся число -', n);
//
let m = 2;
while (m<=31) {
    console.log ('Сегодня пятница', m)
    m+=7
}