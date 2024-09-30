// error handling - try, catch, finally blocks

// try catch without any error

try {
    console.log('This is try block');
    console.log('Hello');
}

catch(err) {
    console.log('This is catch block');
    console.log(err);
}

// try catch with an error

try {
    console.log('This is try block');
    console.log(number); // ReferenceError
    const pi = 3.14;
    pi = 5; // TypeError
}

catch(err) {
    console.log('This is catch block');
    console.log(err.message);
}

// try catch finally

try {
    console.log('This is try block');
    console.log(number);
}

catch(err) {
    console.log('This is catch block');
}

finally {
    console.log('This is finally block');
}


try {
    throw new Error('LATER');
    console.log('DO TRANSACTION');
}

catch(err) {
    console.log('TRY AGAIN LATER');
}

finally {
    console.log('NAVIGATE CUSTOMER TO THEIR DASHBOARD');
}





