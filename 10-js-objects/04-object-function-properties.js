const car = {
    make: 'Tesla',
    model: 'Y',
    year: 2024,
    color: 'White',
    price: 49900.00,
    drive: function() {
        console.log(`${this.year} ${this.make} ${this.model} drives well!`);
    },
    getPrice: function() {
        return this.price;
    },
    getDiscountedPrice: function() {
        return 0.9 * this.price;
    },
    info: function() {
        console.log(`${this.year} ${this.make} ${this.model} is $${this.price}`);
    }
};

car.drive();

console.log(car.getPrice()); // 49900.00
console.log(car.getDiscountedPrice()); // 44100

car.info();

const bike = {
    brand: 'Honda',
    price: 10000,
    color: 'Yellow'
}

const person = {
    name: 'John',
    age: 18,
    city: 'Chicago',
    bike
};

console.log(person);

