interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    }
}


// or

function createPizzas(name: string, sizes: string[]) {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    } as Pizza
}

pizza = createPizza('test',['small','bigs']);