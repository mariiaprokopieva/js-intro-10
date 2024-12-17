/**Write a function named as getDuplicates() which takes an array argument and returns all the elements duplicated in the array when invoked. NOTE: Make your code dynamic that works for any array and return an empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be the same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])                     	-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])                                        -> [ ]
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])         -> [ 'foo', 'a' ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                         -> [ ] */

const getDuplicates = arr => {
    let result = [];

    for(i = 0; i < arr.length; i++) {
        if(arr.includes(arr[i], i + 1) && !result.includes(arr[i])) result.push(arr[i]); 
    }

    return result;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));