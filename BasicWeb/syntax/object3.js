// var v1 = 'v1';
// // 10000 code
// v1 = 'egoing';
// var v2 = 'v2';

var o = {
  v1: 'v1',
  v2: 'v2',
  f1:function(){
    console.log(this.v1);
  },
  f2:function(){
    console.log(this.v2);
  }
}

o.f1();
o.f2();

