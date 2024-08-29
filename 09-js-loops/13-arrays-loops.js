const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
// Find the sum of first 3 and last 3 elements -> 31

console.log('\n------------------SOLUTION-1------------------\n');

let sum = 0;

let i = 0;
while(i < 3) {
    sum += nums[i++];
}

i = nums.length - 3;
while(i < nums.length) {
    sum += nums[i++];
}

console.log(sum);

console.log('\n------------------SOLUTION-2------------------\n');

sum = 0;

const firstLast3 = [...nums.slice(0, 3), ...nums.slice(-3)];

for(const num of firstLast3) {
    sum += num;
}

console.log(sum);

console.log('\n--------SOLUTION-3--------\n');

sum = 0;


for(let i = 0; i <= 2; i++) {
  sum += nums[i] + nums[nums.length - 1 - i];
}
console.log(sum);

console.log('\n--------SOLUTION-4--------\n');

sum = 0;

for(let i = 0; i <= 2; i++) {
  sum += nums[i] + nums.at(-1 - i);
}

console.log(sum);