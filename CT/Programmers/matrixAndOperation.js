const rc = [[1, 2, 3, 4], [ 5, 6, 7, 8], [9, 10, 11, 12]];
const operations = ["ShiftRow", "Rotate", "ShiftRow", "Rotate"];


function solution(rc, operations){
  let answer = [];
  
  const left =[];
  const right =[];
  const mid = [];

  for(let i=0; i<rc.length; i++){
    left.push(rc[i][0]);
    const arr = [];
    for(let j=1; j<rc[0].length-1; j++){
      arr.push(rc[i][j]);
    }
    mid.push(arr);
    right.push(rc[i][rc[0].length-1])
  }

  for(let i=0; i<operations.length; i++){
    if(operations[i]){ // rotate
      mid[0].unshift(left.shift());
      right.unshift(mid[0].pop());
      mid[mid.length-1].push(right.pop());
      left.push(mid[mid.length-1].shift());

    }else{ // shift row
      left.unshift(left.pop());
      right.unshift(right.pop());
      mid.unshift(mid.pop());
    }
  }

  for(let i=0; i<rc.length; i++){
    let arr = [];
    arr.push(left.shift());
    for(let j=1; j<rc[0].length-1; j++){
      arr.push(mid[i].shift());
    }
    arr.push(right.shift());
    answer.push(arr);
  }



  return answer;
}

console.log(solution(rc, operations));
