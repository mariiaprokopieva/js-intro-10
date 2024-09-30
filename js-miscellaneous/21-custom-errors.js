// Custom errors - we use throw keyword to throw an error

function checkAge(age) {
    if(age < 13) throw new Error('You can not create an account');
    else console.log('FILL YOUR PAYMENT DETAILS');
}



try {
    checkAge(10);
}

catch(err) {
    console.log(err.message);
}

console.log('HAVE A GOOD DAY');
