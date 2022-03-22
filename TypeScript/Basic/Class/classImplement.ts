interface SizeInterface {
    // sizes: string[]; // sizes di panggil sebagai constructor, tidak memerlukan pendefinisian
    availableSizes: string[];
}

abstract class Sizess implements SizeInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

interface PizzaInterface extends Sizess {
    readonly name: string;
    toppings: string[];
    updateSizes(izes: string[]): void;
    addTopping(topping: string): void;
}

class Pizzaa extends Sizess implements PizzaInterface {
    public toppings: string[];
    
    constructor(readonly name: string, sizes: string[]) {
        super(sizes)  // untuk passing value ke Sizess constructor
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}