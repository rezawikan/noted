"use strict";
const pizza = {
    name: 'Blackpepper'
};
const toppings = ['blackpapper'];
// ES6
const order = Object.assign({}, pizza, { toppings });
// TypeScript
const spreadOrder = Object.assign(Object.assign({}, pizza), { toppings });
