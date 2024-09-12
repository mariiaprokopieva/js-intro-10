const person = {
    eat: function () {
        console.log('EAT');
    },

    sleep: function () {
        console.log('SLEEP');
    },
    walk: function () {
        console.log('WALK');
    }
};

const singer = {
    sing: function () {
        console.log('SING');
    },
    playGuitar: function () {
        console.log('PLAYS GUITAR');
    },
    __proto__: person
};

singer.walk();
singer.eat();
singer.playGuitar()
singer.sleep();

console.log(singer.__proto__); // person object

