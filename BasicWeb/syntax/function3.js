function add(first, second){
  return first+second;
}

const add2 = function(first,second){
  return first+second;
}

const result = add2(5,5);
console.log(result);

function arrPush(num, arr){
  if(typeof(num) === "number"){
    arr.push(num);
  }
  return arr;
  }

  const arr1 = arrPush(13, [1,3,5,12]);
  console.log(arr1);
  const arr2 = arrPush("13", [1,3,5,12]);
  console.log(arr2);

