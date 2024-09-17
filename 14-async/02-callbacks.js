const { Cypress } = require('../utils/Cypress.js');

// Asynchronous way - PROBLEM!
// Cypress.visit('www.techglobal-training.com');
// Cypress.login('TechGlobal', 'Test1234');
// Cypress.validateLoginMessage('You are logged in');

/*
PROBLEM 
You are logged in validated!
Logged in with TechGlobal Test1234!
www.techglobal-training.com visited!

takes around 1 second

EXPECTED:
www.techglobal-training.com visited!
Logged in with TechGlobal Test1234!
You are logged in validated!
and it takes around 2 seconds
*/

// USING SAME METHODS WITH CALLBACKS ADDED

// Cypress.visit1('www.techglobal-training.com', () => {
//     Cypress.login1('TechGlobal', 'Test1234', () => {
//         Cypress.validateLoginMessage1('You are logged in');
//     })
// })

// USING SAME METHODS WITH PROMISES ADDED - USING THEN

// without function
// Cypress.visit2('www.techglobal-training.com')
// .then(() => Cypress.login2('TechGlobal', 'Test1234'))
// .then(() => Cypress.validateLoginMessage2('You are logged in'));


// with functions
function testValidLogin() {
    Cypress.visit2('www.techglobal-training.com')
.then(() => Cypress.login2('TechGlobal', 'Test1234'))
.then(() => Cypress.validateLoginMessage2('You are logged in'));
}

testValidLogin();

// ASYNC-AWAIT Playwright

async function testValidLogin2() {
    await Cypress.visit2('www.techglobal-training.com');
    await Cypress.login2('TechGlobal', 'Test1234');
    await Cypress.validateLoginMessage2('You are logged in');
}

testValidLogin2();


async function testApp() {
    page.goto('www.techglobal-training.com');
}