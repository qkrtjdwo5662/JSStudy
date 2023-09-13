const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(value => +value);
const sum = new Array(arr.length+1); // initial capacity
sum.fill(0);
console.log(sum);

arr.forEach((value, index) => {
  sum[index+1] = sum[index] + value;
});


const answer =[];
input.slice(2).forEach(ij => {
  const [i, j] = ij.split(' ').map(value => +value);
  answer.push(sum[j] - sum[i-1]);
});

console.log(answer.join('\n'));
