interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    getAvailableSizes(): string[];
}

let pizzas: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    }
}


pizzas = createPizza('test',['small','bigs']);