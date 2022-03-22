const animal = {
    name: 'elephant',
    gender: 'male',
    getName() {
        return this.name;
    },
    getNameSecond: function() {
        return this.name;
    },
    getNameThird: () => {
        return animal.name;
    }
};

const amount = [3];

const elephant = { animal, amount }; // menggabungkan 2 object


console.log(elephant); // 