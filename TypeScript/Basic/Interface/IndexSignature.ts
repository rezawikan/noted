interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    getAvailableSizes(): string[];
    [key:number]: any;
}

let pizzasx: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    }
}


pizzasx = createPizza('test',['small','bigs']);
pizzasx[1] = 'tops';