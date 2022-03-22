
// Number Type
const pizzaCost: number = 10;

const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log(`Pizza cost : ${cost}`);


// String Type
const coupon: string = 'pizza25k';

function normalizeString(coupon: string): string {
    return coupon.toUpperCase();
}

const couponMessage: string = normalizeString(coupon);

console.log(`Final coupon is ${couponMessage}`);


// Boolean Type
const numOfPizzas: number = 3;

function getDiscount(pizzas: number): boolean {
    return pizzas >= 3;
}


// Any Type
// This type is not recommended to use


// Void Type
let selectedTopping: string = 'peperoni';

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('beef');

console.log(selectedTopping);


// No Type
function orderError(error: string) {
    throw new Error(error);
}

orderError('There is an error');


// Null type
// strictNullChecks in ts config
let coupons: string | null;

function removeCoupons(): void {
    coupons = null;
}

console.log(coupons);

removeCoupons();

console.log(coupons);


// Union Type

let thingType: string = 'small';
function typesOne(size: 'small' | 'medium' | 'large'): void {
    thingType = size; 
}

console.log(typesOne('large'));

// FUnction Type

let sumOrderFunction: Function;

sumOrderFunction = (price: number, quantity: number) : number => {
    return price + quantity;
};

const sumOrderFunctionResult = sumOrderFunction(5,5);

let sumOrderFirst = (price: number, quantity: number) : number => {
    return price + quantity;
};

const sumOrderFirstResult = sumOrderFirst(25,5);

let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => x * y;

const sumOrderLast = sumOrder(25,25);

let sumOrderLatest: (price: number, quantity: number) => number = (x, y) => x * y;


// Optional Type
let sumAll : (price: number, quantity?: number) => number;

sumAll = (x,y) => {
    if(y) {
        return x * y;
    }
    return x;
}

// Default Parameter Type

let sumAlls : (price: number, quantity?: number) => number;

sumAlls = (x,y = 1) => x * y;

sumAlls(3);


// Object Type
let objectTypes: { name: string, price: number, getName(): string } = {
    name : 'halo',
    price: 14,
    getName() {
        return objectTypes.name
    }
}

// Array Types
let sizes: number[];

sizes = [1,2,3];

let loppings: Array<string>;
loppings = ['1','2','3'];


// Tupple Types
let pizzaGood: [string, number, boolean];

pizzaGood = ['blackpepper', 20, true];


// Type Aliases
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectionSize: Callback = x => {
    pizzaSize = x;
}

selectionSize('medium');



// Multi Dimentional Array
type Pizza = { name: string, toppings: number };

let adaPizza: Array<Pizza> = [
    {name: 'blackpepper', toppings: 2},
    {name: 'beef', toppings: 3},
]

const serialized = JSON.stringify(adaPizza);

function getFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza);
}
// function getFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj));
// }
getFromJSON(serialized);