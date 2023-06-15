const cacheSize = 3;
const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

// console.log(cities.findIndex((value => value === "Jeju")))
// console.log(cities.splice(cities.findIndex((value => value === "Jeju"))),1);
// console.log(cities);
function solution(cacheSize, cities){
  let answer = 0; 
  let list = new Array();

  for(let i=0; i<cities.length; i++){
    let city = cities[i].toUpperCase();
    if(!list.includes(city)){ // cache miss
      list.push(city);
      answer = answer +5;
    }else{ // cache hit
      list.splice(list.findIndex((value)=> value === city),1);
      list.push(city);
      answer = answer +1;
    }
    if(list.length>cacheSize){
      list.shift();
    }
  }
 
  return answer;
}


console.log(solution(cacheSize, cities));
