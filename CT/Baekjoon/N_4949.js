const s = 
[
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
  "Half Moon tonight (At least it is better than no Moon at all].",
  "A rope may form )( a trail in a maze.",
  "Help( I[m being held prisoner in a fortune cookie factory)].",
  "([ (([( [ ] ) ( ) (( ))] )) ]).",
  " .",
  "."
]

let map = new Map();
map.set('(',')');
map.set('[',']');
map.set('{','}');

let index =0;


while(s[index].charAt(0) !== '.'){
  
  let sentence = s[index];
  const stack = [];
  let flag = false;

  for(let i=0; i<sentence.length; i++){
    if(map.has(sentence.charAt(i))){ // 여는 괄호
      stack.push(sentence.charAt(i));
    }else if(map.get('{') === sentence.charAt(i) || (map.get('[') === sentence.charAt(i) || map.get('(') === sentence.charAt(i))){
      // 닫는 괄호
      if(stack.length ==0 ){
        flag = true;
        console.log('no');
        break;
      }else{
        if(sentence.charAt(i) !== map.get(stack.pop())){ //짝 확인
          flag = true;
          console.log('no');
          break;
        }else continue;
      } 
    }
  }
  index = index +1;

  if(flag) continue;

  if(stack.length == 0){
    console.log('yes');
  }else {
    console.log('no');
  }
  
}