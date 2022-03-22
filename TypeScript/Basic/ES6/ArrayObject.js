"use strict";
const pizzas = {
    name: 'Blackpepper',
    toppings: ['Blackpepper']
};
function orders({ name, toppings }) {
    return { name, toppings };
}
console.log(orders(pizzas));
// mengganti keyname
function orderSecond({ name: pizzaName, toppings: pizzaToppings }) {
    return { pizzaName, pizzaToppings };
}
// mengambil nilai pizzaName dari fungsi orderSecond
const { pizzaName } = orderSecond(pizzas);
console.log(orderSecond(pizzas));
