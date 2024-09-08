const arr = [ 'Remote', 'Laptop', 'Computer', 'Phone'];

const [ remote, laptop, computer, phone ] = arr;

console.log(computer);




const product = {
    name: 'iPhone 16 Pro Max',
    price: 1099,
    color: 'Black',
    quantity: 5
};

const { price, quantity } = product;

console.log(`Total = $${ price * quantity }`); // Total = $5495