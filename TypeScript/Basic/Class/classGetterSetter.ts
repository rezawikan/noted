class Pizza {
    name:string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    get getToppings() {
        return this.toppings;
    }

    set setToppings(toppings: string[]) {
        this.toppings = toppings;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza12 = new Pizza('Peperoni');

pizza12.addTopping('cheese');
console.log(pizza12);