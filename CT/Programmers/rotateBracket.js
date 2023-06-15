const s = "[](){}";


function solution(s){
  let answer = 0;

  const map = new Map();
  map.set('(',')');
  map.set('[',']');
  map.set('{','}');

  for(let i=0; i<s.length; i++){
    let stack = [];
    let flag = false;
    for(let j=0; j<s.length; j++){
      let now = s.charAt((i+j) % s.length);
      if(map.has(now)){ // 여는 괄호
        stack.push(now);
      }else{ // 닫는 괄호 
        if(stack.length == 0){ // stack empty 라면 no 
          flag = true;
          break;
        }else{ // empty 아니라면
          if(now != map.get(stack.pop())){ // 짝 맞는지 확인
            flag = true;
            break;
          }else continue;
        }
      }
    }
    if(flag) continue;

    if(stack.length == 0){
      answer = answer +1;
    }


  }


  return answer;
}

console.log(solution(s));