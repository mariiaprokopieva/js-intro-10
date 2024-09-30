
/**
 * getElementById()
 * - Gets element by id
 */

const heading = document.getElementById('heading');
console.log(heading); // <h1 id="heading">...</h1>

/**
 * getElementsByClassName()
 * - returns all elements with same class name
 */

const boxes = document.getElementsByClassName('box');
console.log(boxes); // HTMLCollection ~ Array

boxes[0];

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
}