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

function createAuto(brand, maxSpeed) {
    return {
        brand,
        speed: 0,
        maxSpeed,
        engine: false
    }
}

const bmw = createAuto('bmw', 140);
const mercedes = createAuto('mercedes', 190);

function startEngine(car) {
    if (!car.engine) { //wykrzyknik odwraca wartość
        car.engine = true;
        console.log('silnik odpalony')
    } else {
        console.log('silnik już był odpalony')
    }
}

function stopEngine(car) {
    if (car.speed === 0) {
        car.engine = false;
        console.log('silnik zgaszony')
    } else {
        console.log('zatrzymaj się zanim zgasisz silnik')
    }
}

function speedUp(car) {
    if (car.engine) {
        car.speed = Math.min(car.speed + amount, car.maxSpeed);
        console.log('Twoja prędkość to: ${car.speed}')
    } else {
        console.log('najpierw odpal silnik')
    }
}

function slowDown(car) {
    car.speed = Math.max(car.speed - amount, 0);
    console.log('Twoja prędkość to: ${car.speed}')
}

speedUp(bmw, 200);
startEngine(bmw);
speedUp(bmw, 40);
speedUp(bmw, 40);
speedUp(bmw, 240);
stopEngine(bmw);
slowDown(bmw, 50);
slowDown(bmw, 250);
stopEngine(bmw);
