// const user = {
//     name: 'Jarosław',
//     score: 0,
//     updateScore: function(newScore) {
//         user.score += newScore
//     }
// }

// const user1 = ...

//Problem, jak stworzyć wielu użytkowników, nie duplikując kodu (factory design patytern)
// dry  - don't repeat yourself
// 2 usages

// function user1(name) {
//     return {
//         name,
//         score: 0,
//         updateScore(newScore) {
//             this.score += newScore
//         }
//     }
// }

// const u1 = user1('Lech');
// const u2 = user1('Mateusz');

// this wskazuje na obiekt pzed kropką, tzn że obiekt jest kontekstem metody (fn)
// u1.updateScore(42)

// Problem nr 2, funkcja updaeScore dla każdego użytkownika jest taka sama, nie ma sensu jej deklarować dla każde3go użytkownika sobno

// no usages
// function User(name) {
//     this.name = name;
//     this.score = 0;
// }

// User.prototype.updateScore = function(newScore){
//     this.score += newScore
// }

// const u3 = new User('Antoni');
// const u4 = new User('Jacek');

// // new to konstruktor któy tworzy obiekt, służy do wywołania tego konstruktora (key)
// // do this przypisuje wartość jaką chce, i poxniej konstruktor zwróci tego this (jego wartość)
// // przy this nie pisze się return czyli metody zwracania, dowiązanie prototypowe

// String.prototype.capitalize = function() {
//     return this[0].toUpperCase() + this.slice(1);
// }


// nadpisaliśmy , dupa debugging - pisze w wielu miejscach console.log('dupa') i aptrzę gdzie się pojawi
// Array.prototype.map = function() {
//     return 'misio';
// }

// Array.prototype.myMap = function(cb) {
//     const temp = []; // temp - pusta tablica

//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;
// }

// const arrr = [1,2,3,4];
// const result  = arr.myMap((item, id, coll) => item * id);

// Array.prototype.myFilter = function(cb) {
//     const temp = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)){ // w this przechowuje się cała atblica
//             temp.push(this[i]);
//         }
//     }

//     return temp;
// }

// acc - accumulator, ce - current element, idx, arr -> agregacja tablicy,
// reduce => cb, initialValue

// Array.prototype.myReduce = function (fn, initialValue = undefined) {
// // stwórz zmienną do akumulacji wartości
//     let accumulator = initialValue !== undefined ? initialValue : this[0];
// //przeiteruj [po wszystkich wartościach
//     for (let i = 0; i < this.length; i++) {
//         this.unshift(initialValue);
//     }

//     for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
//         accumulator = fn(accumulator, this[i], i, this);
//     }
//wywołaj caalback, pamiętaj żeby przekazać wszystkie 4 wartości
//wynik callback to owa wartość dla zmiennej do akumulacji
//pamiętaj, że opcjonalny initalvalue to pierwszy acc, jezlei jej nie ma to acc to pierwszy element tablicy

// return accumulator;
// }

// const arr = [1,2,3];
// const result = arr.myReduce((acc, ec, id, coll) => acc * ce);


// function calculateAvgAge(elements) {
//     const ages = elements.map((element) => element.age);
//     ages.reduce((acc, ce) => acc + ce)
//     return ages;

// }

// const result = calculateAvgAge(data);
// console.log(result);

//inne rozwiązanie

// const calculateAvgAge = (elements) => elements
// .reduce((acc, ce) => acc.age + ce.age, 0) / elements/length;

// syntactic sugar = lukier składniowy

//jak się tworzy klasy?

class User1 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(newScore) {
        this.score += newScore;
    }
}

const u5 = new User1('Zbigniew');


function magic(data) {
    // "use strict"; // wyświetli undefined
    this.data = data;
    console.log(this);
}

const context =  {
    a: 1, b: 2
}

// magic();
magic.call(context);
magic.apply(context);
const magic2 = magic.bind(context);
magic2()

const h1Ref = document.querySelector('#title'); // szuka jednej wartości

class Magic{
    constructor(){
        this.counter = 0;
    }

    click(){

        //this - object klasy Magic
        h1Ref.addEventListener('click', (function() {
            this.counter++;
            console.log(this.counter);
        }).bind(this)) //bind włożył this do addEventListene i używa on tego this

        //this - object klasy Magic
    }
}

const m = new Magic();
m.click()

// jesli nie chcemy mieć lokalnie stosowanego this używamy funkcji strzałkowej - ona nie am this

// h1Ref.addEventListener('click', () => {
//     this.counter++;
//     console.log(this.counter);
// }) //bind włożył this do addEventListene i używa on tego this

// //this - object klasy Magic
// }
// }
