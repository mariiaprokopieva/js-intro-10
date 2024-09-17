const { Program } = require('../utils/Program.js');

/*
TEST CASE:
1. Go to https://www.amazon.com/    1 second
2. Select a product 2 seconds
3. Add to cart  0.5 second
4. Checkout 1 second
*/

// USING then() and catch()
// function test1 () {
//     Program.gotoAmazon()
//     .then(() => Program.selectProduct())
//     .then(() => Program.addToCart())
//     .then(() => Program.checkout())
//     .catch((error) => console.log(error));
// }

// test1();

// USING async await
async function test2() {
    try {
        await Program.gotoAmazon();
        await Program.selectProduct();
        await Program.addToCart();
        await Program.checkout();
    }
    catch(err) {
        console.log(err);
    }
} 

test2();
