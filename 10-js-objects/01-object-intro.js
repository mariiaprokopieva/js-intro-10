// how to create an object

const obj = {}; // empty object
const obj2 = new Object();

const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: '12345 -1234',
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};

// getting properties

console.log(person.favNumber); // 7
console.log(person['favNumber']); // 7

// Updating properties
person.jobTitle = 'SDET Lead';
person['jobTitle'] = 'SDET Lead';

console.log(person.favCities[1]);
console.log(person.address.ZIP);

// Adding a new property
person.favProgrammingLanguage = 'TypeScript';
person.favColor = 'Yellow';
person.paymentDetails = [
    {
        name: 'John Doe',
        creditCardNumber: 1234123412341234,
        expDate: '11/26',
        securityCode: 123,
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: '12345 -1234',
        country: 'US'
    }
];

console.log(person);

// deleting properties from the object
delete person.address;
delete person['paymentDetails'];

console.log(person);