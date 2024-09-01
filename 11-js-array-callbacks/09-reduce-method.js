const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];
// Count evens = 4

let evens = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, 0);

console.log(evens);

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

const countApple = fruits.reduce((acc, curr) => curr.toLowerCase().includes('apple') ? acc + 1 : acc, 0);
const countWordsWithI = fruits.reduce((acc, curr) => curr.toLowerCase().includes('i') ? acc + 1 : acc, 0);
const countWordsEndWithE = fruits.reduce((acc, curr) => curr.toLowerCase().endsWith('e') ? acc + 1 : acc, 0);

console.log(countApple); // 2
console.log(countWordsWithI); // 2
console.log(countWordsEndWithE); // 3

//Write a function that finds a max number in the array

// Best solution

function max1(arr) {
    return Math.max(...arr);
}

console.log(max1(numbers));

// Using reduce

const max = (arr) => arr.reduce((acc, curr) => curr > acc ? curr : acc);

console.log(max(numbers));


let sumArr = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ].map((arr) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  })
  // [6, 35, 300]
  console.log(sumArr)


  const objects = [ 'Remote', 'Computer', 'TV', 'Mouse', 'Notebook', 'AC' ];

  // the shortest -> get the first shortest -> TV
  // the longest -> get the last longest -> Notebook

  let shortestObject = objects.reduce((acc, curr) => {
    if(curr.length < acc.length) return curr;
    return acc;
  });

  console.log(shortestObject);