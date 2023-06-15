const n = 4;
const arr = [9,5,4,8];
const answer =[0,0,0,0];

function solution(n, arr){
  const stack = [];
  for(let i=n-1; i>=0; i--){
    while(stack.length !==0 && arr[i]>stack[stack.length-1]){
      stack.pop();
    }
    
    if(stack.length ==0 ){
      answer[i] = -1;
    }else answer[i] = stack[stack.length-1];

    stack.push(arr[i]);

  }

  return answer;
}

console.log(solution(n, arr))
