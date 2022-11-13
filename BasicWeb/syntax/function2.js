console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second){ //parameter
  return first + second;
}

console.log(sum(2,4)); // argument

const f = function(first, second){
  return first + second;
}
console.log(f(2,4));

const ff = (first, second) => {
  return first + second;
}
console.log(ff(2,4));