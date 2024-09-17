class Engineer {
    #haveDegree = true; // private property

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    // encapsulation
    getHaveDegree() {
        return this.#haveDegree;
    }

    setHaveDegree(bool) {
        this.#haveDegree = bool;
    }
}


const e1 = new Engineer('John', 'Doe');
const e2 = new Engineer('Alex', 'Smith');

console.log(e1);
console.log(e2);

//public access
// console.log(e1.#haveDegree) // true

console.log(e1.getHaveDegree());

e2.setHaveDegree(false);

console.log(e2.getHaveDegree());