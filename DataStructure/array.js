const arr = [];
console.log(arr);

arr.push([1,2]);
arr.push([3,4]);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}