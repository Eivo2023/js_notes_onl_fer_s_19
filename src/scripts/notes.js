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

// named function
function addDigits(digit1, digit2){
    return digit1 + digit2;
}

addDigits(1, 2);

// funkcje anonimowe
// classic
// wyrażenie funkcyjne - przypisanie deklaracji funkcji do zmiennej
const addDigits2 = function (digit1, digit2){
    return digit1 + digit2;
}

addDigits2(1, 2);

// arrow function - funkcja strzałkowa, fat arrow function (nie ma this ani arguments)
const addDigits3 = (digit1, digit2) => {
    return digit1 + digit2;
}

addDigits3(1, 2);

// wariancje arrow fn
const add = () => {
    return 42;
}
const add1 = a => {
    return a + 42;
} // tak nie pisać, zawsze piszemy nawiasy okrągłe
const add2 = (a, b) => {
    return a + b;
}
const add3 = (a, b) => a + b; // implicit return, jak nie am klamerek

const magic = a => a <= 0; // (a) => (a <= 0), (a) => {return a <= 0}

const magic2 = () => {
    return {a: 42}
}

const magic3 = () => ({a: 42})



