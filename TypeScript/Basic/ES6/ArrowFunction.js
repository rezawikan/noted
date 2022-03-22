"use strict";
const animals = [
    { name: 'monkey', foods: ['banana', 'mango', 'orange'] },
    { name: 'rabbit', foods: ['carrot', 'vegetables'] }
];
const firstWayAnimal = animals.map(function (animal) {
    return animal.name.toUpperCase();
});
const secondWayAnimal = animals.map((animal) => {
    return animal.name.toUpperCase();
});
const secondWayAnimalWithKey = animals.map((animal, key) => {
    return [
        animal,
        key
    ];
});
const specialWayAnimal = animals.map(animal => animal.name.toUpperCase());
// parameter yang digunakan haru satu
const animalsFuntion = {
    name: 'rabbit',
    getName: function () {
        setTimeout(function () {
            // this tidak akan mengacu pada object animalsFunction
            // karena setTimeout membuat scope baru
            console.log(this);
        }, 100);
    }
};
// cara untuk mengambil object this
const animalsSecondFuntion = {
    name: 'rabbit',
    getName: function () {
        const self = this;
        setTimeout(function () {
            console.log(self);
        }, 100);
    }
};
// () => (arrow function) tidak akan membuat scope baru
const animalsThrirdFuntion = {
    name: 'rabbit',
    getName: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 100);
    }
};
// this is not working
// because the () => pointing to global scope
const animalsArrowFuntion = {
    name: 'rabbit',
    getName: () => this.name
};
const animalsArrowSecondFuntion = {
    name: 'rabbit',
    getName: () => animalsArrowSecondFuntion.name
};
