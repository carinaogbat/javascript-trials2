'use strict';

// 1. isHometown

// Define your function here
function isHometown(town){
    return town === "San Francisco"
}

// 2. getFullName

// Define your function here
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

// 3. calculateTotal

// Define your function here
function calculateTotal(basePrice, state, tax=0.5){
    const subTotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === "CA"){
        fee = 0.03 * subTotal;
    }
    else if (state === "PA") {
        fee = 2;
    }
    else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return subTotal + fee
}

const testTown = "Oakland"
const testTown2 = "San Francisco"
console.log(isHometown(testTown))
console.log(isHometown(testTown2))
const first = "Carina"
const last = "Ogbat"
console.log(getFullName(first, last))
const base = 10
const state = "CA"
console.log(calculateTotal(base, state))