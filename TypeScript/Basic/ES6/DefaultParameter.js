"use strict";
function multiply(a, b = 25) {
    return a * b;
}
function Ismultiply(a, b) {
    if (!b) {
        b = 25;
    }
    return a * b;
}
console.log(multiply(5)); // 125
console.log(multiply(5, 25)); // 125
console.log(multiply(5, 35)); // 175
