

console.log('This is js file');

// test/qa, dev, production environment(shouldn't be any error in prod) -> hot fix
// in JavaScript there are two environments: client and server

// window
console.log('window', window); // window in client environment is an object
console.log(typeof window); // object

// In server side window is undefined

/*
Alert
*/

// window.alert('Hi')

// const alertAns = alert('How are you?');

// we can ommit window

/**
 * Prompt
 */

// const ans = prompt('How are you today?'); // String, null, empty string

// const confirmAns = confirm('Are you ready to enter?');

/**
 * innerHeight and innerWidth
 */

alert(innerHeight); // number
alert(innerWidth); // number

/**
 * LocalStorage
 * - setItem()
 * -getItem()
 */

localStorage.setItem('username', 'tg20');
const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2','asdfsf');
localStorage.setItem('username3', 'sdahjasdfhladf');

localStorage.clear();