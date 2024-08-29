const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

function firstEven(arr) {
for(const num of nums) {
    if(num % 2 === 0) return num;
    }
}

console.log(firstEven(nums));

console.log('\n------------------SOLUTION-2------------------\n');

let firstEvenNum;

for(const num of nums) {
    if(num % 2 === 0) {
        firstEvenNum = num;
        break;
    }
}

console.log(firstEvenNum); // 8

// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let oddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        oddLengthCity = city;
        break;
    }
}

console.log(oddLengthCity);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6OrMore = [];

for(const city of cities) {
    if(city.length > 5) citiesWithLength6OrMore.push(city);
}

console.log(citiesWithLength6OrMore);

// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]

const citiesWithI = [];

for(const city of cities) {
    if(city.includes('i') || city.includes('I')) citiesWithI.push(city);
}

console.log(citiesWithI);