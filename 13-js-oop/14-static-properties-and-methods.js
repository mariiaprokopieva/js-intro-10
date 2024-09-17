console.log(Math.PI); // PI is a static property of Math prototype

console.log(Math.max(1,2)); // max() is a static method of Math prototype


/*
static keyword
static methods-properties: can be invoked/accessed with the  className or prototype
*/

class AmazonAccount {
    variable1 = "Hello";
    static variable2 = "World";
    // static methods can be invoked by the class or prototype name
    static aFunction() {
        console.log('this is static method');
    }

    // non-static methods can be invoked by the object of this class or prototype
    bFunction() {
        console.log('this is non-static method');
    }
}

const aa = new AmazonAccount();
console.log(aa);

aa.bFunction();

AmazonAccount.aFunction(aa);

Array.isArray();
Object.entries();
Object.keys();
Object.values();
Object.create();
Math.min();
Number.isInteger();

// Static properties
Math.PI;
Number.MAX_VALUE;
Number.MIN_VALUE;