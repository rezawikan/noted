class Topping {

    constructor(public toppings: string[]){}

    get getToppings() {
        return this.toppings;
    }

    set setToppings(toppings: string[]) {
        this.toppings = toppings;
    }
}

class Pizzas extends Topping {
    constructor(name: string, toppings: string[]) {
        super(toppings)
    }

}

const pizza123 = new Pizzas('Peperoni',['asdasd','asdasd']);

console.log(pizza123);