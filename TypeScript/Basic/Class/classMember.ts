class Pizza {
    public name:string;
    public toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    // constructor(name: string) {} // akan otomatis di simpan sebagai variabel name
    // constructor(private name: string) {} // akan otomatis di simpan sebagai variabel name (private)
    // constructor(public name: string) {}
    // constructor(readonly name: string) {}

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza12 = new Pizza('Peperoni');

pizza12.addTopping('cheese');
console.log(pizza12);