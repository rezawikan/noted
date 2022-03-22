"use strict";
// Number Type
const pizzaCost = 10;
const pizzaToppings = 2;
function calculatePrice(cost, toppings) {
    return cost + 1.5 * toppings;
}
const cost = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza cost : ${cost}`);
// String Type
const coupon = 'pizza25k';
function normalizeString(coupon) {
    return coupon.toUpperCase();
}
const couponMessage = normalizeString(coupon);
console.log(`Final coupon is ${couponMessage}`);
// Boolean Type
const numOfPizzas = 3;
function getDiscount(pizzas) {
    return pizzas >= 3;
}
// Any Type
// This type is not recommended to use
// Void Type
let selectedTopping = 'peperoni';
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping('beef');
console.log(selectedTopping);
// No Type
function orderError(error) {
    throw new Error(error);
}
orderError('There is an error');
// Null type
// strictNullChecks in ts config
let coupons;
function removeCoupons() {
    coupons = null;
}
console.log(coupons);
removeCoupons();
console.log(coupons);
// Union Type
let thingType = 'small';
function typesOne(size) {
    thingType = size;
}
console.log(typesOne('large'));
// FUnction Type
let sumOrderFunction;
sumOrderFunction = (price, quantity) => {
    return price + quantity;
};
const sumOrderFunctionResult = sumOrderFunction(5, 5);
let sumOrderFirst = (price, quantity) => {
    return price + quantity;
};
const sumOrderFirstResult = sumOrderFirst(25, 5);
let sumOrder;
sumOrder = (x, y) => x * y;
const sumOrderLast = sumOrder(25, 25);
let sumOrderLatest = (x, y) => x * y;
// Optional Type
let sumAll;
sumAll = (x, y) => {
    if (y) {
        return x * y;
    }
    return x;
};
// Default Parameter Type
let sumAlls;
sumAlls = (x, y = 1) => x * y;
sumAlls(3);
// Object Type
let objectTypes = {
    name: 'halo',
    price: 14,
    getName() {
        return objectTypes.name;
    }
};
// Array Types
let sizes;
sizes = [1, 2, 3];
let loppings;
loppings = ['1', '2', '3'];
// Tupple Types
let pizzaGood;
pizzaGood = ['blackpepper', 20, true];
let pizzaSize = 'small';
const selectionSize = x => {
    pizzaSize = x;
};
selectionSize('medium');
let adaPizza = [
    { name: 'blackpepper', toppings: 2 },
    { name: 'beef', toppings: 3 },
];
const serialized = JSON.stringify(adaPizza);
function getFromJSON(obj) {
    return JSON.parse(obj);
}
// function getFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj));
// }
getFromJSON(serialized);
