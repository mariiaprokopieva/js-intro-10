class Person {
    eat() {
        console.log('PERSON EAT');
    }

    walk() {
        console.log('WALK');
    }

    learn() {
        console.log('LEARN');
    }
}

const p1 = new Person();
p1.eat();
p1.walk();
p1.learn();


class Tester extends Person {
    // Overriding parent method
    eat() {
        console.log('PERSON EAT');
    }
    test() {
        console.log('TEST');
    }
}

const t1 = new Tester();

t1.test();

t1.eat();