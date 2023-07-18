// Program do tworzenia samochodów
// samochód ma: BroadcastChannel, prędkość, silnik, max speed
// samochód może przyspieszać, zwalniać, odpalać silnik i gasić

// const auto = {
//     brand: "BMW",
//     speed: 0,
//     engine: false,
//     maxSpeed: 140
// }

// const auto1 = {
//     brand: "Mercedes",
//     speed: 0,
//     engine: false,
//     maxSpeed: 190
// }

class Auto {

    constructor(brand, maxSpeed) {

    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.engine = false;
}
startEngine(){
    if (!this.engine) { //wykrzyknik odwraca wartość
        this.engine = true;
        console.log('silnik odpalony')
    } else {
        console.log('silnik już był odpalony')
    }
}

stopEngine(){
    if (this.speed === 0) {
        this.engine = false;
        console.log('silnik zgaszony');
    } else {
        console.log('zatrzymaj się zanim zgasisz silnik');
    }
}

speedUp(amount){
    if (this.engine) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log('Twoja prędkość to: ${this.speed}');
    } else {
        console.log('najpierw odpal silnik');
    }
}

slowDown(amount) {
    this.speed = Math.max(this.speed - amount, 0);
    console.log('Twoja prędkość to: ${this.speed}');
}
}


// Auto.prototype.startEngine = function() {
//     if (!this.engine) { //wykrzyknik odwraca wartość
//         this.engine = true;
//         console.log('silnik odpalony')
//     } else {
//         console.log('silnik już był odpalony')
//     }
// }

// Auto.prototype.stopEngine = function() {
//     if (this.speed === 0) {
//         this.engine = false;
//         console.log('silnik zgaszony')
//     } else {
//         console.log('zatrzymaj się zanim zgasisz silnik')
//     }
// }

// Auto.prototype.speedUp = function(amount) {
//     if (this.engine) {
//         this.speed = Math.min(this.speed + amount, this.maxSpeed);
//         console.log('Twoja prędkość to: ${this.speed}')
//     } else {
//         console.log('najpierw odpal silnik')
//     }
// }

// Auto.prototype.slowDown = function(amount) {
//     this.speed = Math.max(this.speed - amount, 0);
//     console.log('Twoja prędkość to: ${this.speed}')
// }

const bmw = new Auto('bmw', 140);
const mercedes = new Auto('mercedes', 190);

bmw.speedUp(200);
bmw.startEngine();
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.stopEngine();
bmw.slowDown(50);
bmw.slowDown(250);
bmw.stopEngine();
