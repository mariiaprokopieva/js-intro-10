let items = 'Apples, oranges, bananas, eggs, milk';

console.log(items.split(','));
console.log(items.split(' '));
console.log(items.split(', '));

let sent = 'I like Javascript';

console.log(sent.split(' ')); // [ 'I', 'like', 'Javascript' ]
console.log(sent.split('like')); // [ 'I ', ' Javascript' ]
console.log(sent.split(' ', 1)); // [ 'I' ]


/*
TASK: used to split the string into array elements with the given separator
RETURN: array of elements
ARGUMENTS: string-separator, optional limitaarg
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static
 */
