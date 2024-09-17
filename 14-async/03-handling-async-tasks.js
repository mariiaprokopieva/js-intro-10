/*
connectToDB(); // 3 seconds
fetchData(); // 2 seconds
useData(); // 0.5 seconds
*/


// synchronous code
// console.log('CONNECTION');
// console.log('FETCH DATA');
// console.log('USE DATA');

setTimeout(() => {
    console.log('CONNECTION');
    setTimeout(() => {
        console.log('FETCH DATA');
        setTimeout(() => {
            console.log('USE DATA');
        }, 500);
    }, 2000);
}, 3000);

setTimeout(() => {
    console.log('FETCH DATA');
}, 2000);

setTimeout(() => {
    console.log('USE DATA');
}, 500);


function connectToDB(callback) {
    setTimeout(() => {
        console.log('CONNECTION');
        callback();
    }, 3000);
}

function fetchData(callback) {
    setTimeout(() => {
        console.log('FETCH DATA');
        callback();
    }, 2000);
}

function useData() {
    setTimeout(() => {
        console.log('USE DATA');
    }, 500);
}

connectToDB(() => {
    fetchData(() => {
        useData();
    });
});

