const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

const n = input[0].split(" ")[0];
const h = input[0].split(" ")[1];
console.log(n);
console.log(h);

const top = new Array(h+1);
const bottom = new Array(h+1);
console.log(top);

console.log(top);
for(let i=0; i<n; i++){
   if(i%2!=0){
    top[input[i+1]]++;
   }else{
    bottom[input[i+1]]++;
   }
}
console.log(top);
for(let i=h-1; i>=1; i--){
  top[i] = top[i] + top[i+1];
}

console.log(top);