const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warsaw',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]

// Policz średnią wieku

// function calculateAvgAge(elements) {
//     let sum = 0;

//     // for (let i = 0; i < elements.lenght; i++){
//     //     sum += elements[i].age;
//     // }
// for (const element of elements) {
//     sum += element.age;
// }

//     return sum / elements.lenght;
// }

// const result = calculateAvgAge(data);
// console.log(result);

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

// Policz średnią wieku ludzi z poza Warszawy



// function calculateAvgAge(items) {
//     let sum = 0;
//     let counter = 0;

//     for (const item of items){
//         if (item.city !== 'warszawa') {
//             sum += item.age;
//             counter++;

//         }
//     }

//     return sum / counter;

// // for (const element of elements) {
// //     sum += element.age;
// // }
// }

// const result = calculateAvgAge(data);
// console.log(result);

// function calculateAvgAge(items) {
//     const result = items.filter((item) => item.city !== 'warszawa');
//     return result.reduce((acc, ce) => acc + ce.age, 0) / result.lenght;
// }

// const result = calculateAvgAge(data);
// console.log(result);

// Sprawdź czy wszyscy są młodsi niż 30 lat

// function calculateAvgAge(data) {

//     for (const item of data){
//          if (item.age > 30) {
//             return false;
//          }
// }
// return true;
// }

// const result = calculateAvgAge(data);
// console.log(result);

//inne rozwiązanie tego zadania
// const calculateAvgAge = (data) => data.every((item) => item.age < 30);

// const result = calculateAvgAge(data);
// console.log(result);

// Czy ktokolwiek pochodzi z krakowa

// function fromTheCity(data) {

//     for (const item of data){
//          if (item.city === 'krakow') {
//             return true;
//          }
// }
// return false;
// }

// const result = fromTheCity(data);
// console.log(result);

//inny sposób rozwiązania

// const fromTheCity = (data) => data.some((item) => item.city === 'krakow');

// const result = fromTheCity(data);
// console.log(result);

// Zwróc tablicę imion osób, które kochają JS

// function whoLovesJs(items) {
//     .filter((item) => element.hobbies.includes('js'));
//     .map((element) => element.name;
// }

// const result = whoLovesJs(data);
// console.log(result);

// rozwiązanie klasyczne

// const loveJs = [];

// for (const element of elements) {
//     if (element.hobbies.includes('js')) {
//         temp.push(element.name);
// }
// return temp;
// }

// const result = whoLovesJs(loveJs);
// console.log(result);


// Policz ile jest unikalnych hobby

const hobbies = [];

// function countUniqueHobbies(items); {
    // zrób tablice do dodawania pojedynczych hobby
    // przeiteruj po wszystkich elementach items
    // wewnątrz iteracji po items prz\eiteruj po hobbies poszczególnych elementów
    //sprawdź czy dane hobby jeszcze nie jest w tablicy do dodawania hobby i go dodać
    // zwróć długość tablicy z hobby

//     for (const item of items) {
//     for (const hobby of item.hobbies) {
//         if (!hobbies.includes(hobby)){
//            hobbies.push(hobby);
//         }
//     }
// }
// return hobbies.length;

// }

const countUniqueHobbies = (data) => new Set(data.flatMap((item) => item.hobbies));
const result = countUniqueHobbies(data);
console.log(result);
