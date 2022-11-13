const coffes = [
  {
    "store" : "서울시",
    "kinds" : [
      {
        "name" : "아메리카노",
        "price" : 2000,
        "productCount" : 100
      },
      {
       "name" : "카페모카",
       "price" : 3000,
       "productCount" : 200
      },
      {
        "name" : "카페라떼",
        "price" : 2500,
        "productCount" : 150
      }]
  },
  {
    "store" : "수원시",
    "kinds" : [
      {
        "name" : "복숭아에이드",
        "price" : 2000,
        "productCount" : 100
      },
      {
       "name" : "수박에이드",
       "price" : 3000,
       "productCount" : 200
      },
      {
        "name" : "체리콕",
        "price" : 2500,
        "productCount" : 150
      }]
  }
]
function getNames(coffes){
  const names = [];
  for(let i=0; i < coffes.length; i++){
    for(let j=0; j < coffes[i].kinds.length; j++){
      names.push(coffes[i].kinds[j].name);
    }
  }
  return names;
}
console.log(getNames(coffes));