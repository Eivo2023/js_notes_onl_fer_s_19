//Tworzenie zmiennej
// var, let, const

// Redeklaracja (var)
// var x = 42;
// var x = 2137;
// console.log(x);

// Redeklaracja (let i const) nie da się!
// let x = 42;
// let x = 2137;
// console.log(x);

//Reinicjalizacja (var)_
// var x = 42;
// x = 2137;
// console.log(x);

// var y = 42;
// y = 2137;
// console.log(y);

// let y = 42;
// y = 2137;
// console.log(y);

// const sie nie da!
// const y = 42;
// y = 2137;
// console.log(y);

// Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na górę aktualnie przetwarzanego zasięgu (var, let (TDZ - temporary dead zone), const (TDZ))

// console.log(x);
// var x = 42;

// var y;
// console.log(x);
// x = 42; // przydaje sie przy funkcjach

//'use script';

// x = 10
// console.log(x);
// let x = 42;

// Zasięg (Scope) - widoczność, dostępność identyfikatorów (nazwy zmiennych, funkcji, klas), tzn. gdzie to można używać

// Zasięg funkcyjny - ograniczony przez ciało funkcji (var)
// Zasięg blokowy - ograniczony przez parę klamerek (curly braces) (let, const)

// const x = 10;

// if (x){
//     var y = 42;
//     let y1 = 42;
//     const y2 = 42;
// }

// console.log(y);
// console.log(y1);
// console.log(y2);

// function magic() {
//     var y = 42;
//     let y1 = 42;
//     const y2 = 42;
// }

// magic();
// console.log(y, y1, y2);

// functions

// // named function
// function addDigits(digit1, digit2){
//     return digit1 + digit2;
// }

// addDigits(1, 2);

// // funkcje anonimowe
// // classic
// // wyrażenie funkcyjne - przypisanie deklaracji funkcji do zmiennej
// const addDigits2 = function (digit1, digit2){
//     return digit1 + digit2;
// }

// addDigits2(1, 2);

// // arrow function - funkcja strzałkowa, fat arrow function (nie ma this ani arguments)
// const addDigits3 = (digit1, digit2) => {
//     return digit1 + digit2;
// }

// addDigits3(1, 2);

// // wariancje arrow fn
// const add = () => {
//     return 42;
// }
// const add1 = a => {
//     return a + 42;
// } // tak nie pisać, zawsze piszemy nawiasy okrągłe
// const add2 = (a, b) => {
//     return a + b;
// }
// const add3 = (a, b) => a + b; // implicit return, jak nie am klamerek

// const magic = a => a <= 0; // (a) => (a <= 0), (a) => {return a <= 0}

// const magic2 = () => {
//     return {a: 42}
// }

// const magic3 = () => ({a: 42})

// control flow
// if (condition) {
//     //true
// }   else if (condition2) {
//     // true if condition false and condition 2 true
// }   else {
//     // default
// }

// const value = 2;
// switch (value) {
//     case 1:
//         // logic
//         break;
//         case 2:
//             // logic
//             break;
//             default:
//                 // logic
// }

// switch (value) {
//     case 1:
//         // logic
//         case 2:
//             // logic
//             default:
//                 // logic
// }

// switch (value) {
//     case 1:
//         console.log(value);
//         break;
//         case 2:
//             console.log(value);
//             break;
//             default:
//                 // logic
// }

// loops

// const x = [1, 2, 3];
// const y = [];

// // for (let i = 0; i < x.length; i++) {
// //     y.push(x[i] * 2);
// // }
// // console.log(y); // najszybsza pętla

// // for of
// for (const item of x) {
//     y.push(item * 2);
// }

// while jeżeli nie wiemy ile iteracji, for jeżeli wiemy ile jest iteracji
// while (condition){
//     //logic
// }

// let index = 0;

// while (index < 3) {
//     y.push(x[index] * 2);
//     index++;
// }

// do {} while (condition)


// exercises

// napisz fukncję która zwraca z tablicy najwyższą wartość

// function max(collection) {
//     let maxValue = collection[0];

//     for (const digit of collection){
//         if (digit > maxValue){
//             maxValue = digit;
//         }
//     }
//     return maxValue;
// }

// console.log(max([1, 2, 3, 4, 5, 2, 42]));

// Napis zfunkcjke, która zwraca nazwę dnia tygodnia na podstawie liczby: 1 - Sunday, 7 - Saturday

// const weekNames = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

// function getDayName(weekNames) {
//     for (let i = 0; i < weekNames.length; i++) {
//         const element = array[index];

//     }
// }

// const getDayName = (dayIndex) => {
//     switch (dayIndex){
//         case 1:
//             return "Niedziela"
//             case 2:
//             return "Poniedziałek"
//             case 3:
//             return "Wtorek"
//             case 4:
//             return "Środa"
//             case 5:
//             return "Czwartek"
//             case 6:
//             return "Piątek"
//             case 7:
//             return "Sobota"
//             default:
//                 // return false;
//                 throw new Error('Invalid index day');
//     }
// };

// console.log(getDayName(3));

// inne rozwiązanie

// const getDayName = (dayIndex) => {
//     if (dayIndex < 0 || dayIndex > 7) throw new Error('Invalid index day');
//     return ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

//     return days[dayIndex - 1];
// }

// Policz średnią elementów z tablicy

// function calculateAvg(numbers) {
//     const sum = 0;

//     for (const number of numbers) {
//         sum += number
//     }
// }

// console.log(calculateAvg([1, 2, 3, 4, 5]));
