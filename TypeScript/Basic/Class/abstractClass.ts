abstract class Toppings {

    constructor(public toppings: string[]){}

    get getToppings() {
        return this.toppings;
    }

    set setToppings(toppings: string[]) {
        this.toppings = toppings;
    }
}

// new Toppings(['asdasd']); // tidak bisa membuat object baru karena menggunakan sbtract class

class Pizzas extends Toppings {
    constructor(name: string, toppings: string[]) {
        super(toppings)
    }

}

const pizza123 = new Pizzas('Peperoni',['asdasd','asdasd']);

console.log(pizza123);