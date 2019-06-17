//=>让a和b交换位置
var a=10;
var b=20;
var c=a;
a=b;
b=c;
console.log(a,b);
//=>让d和e交换位置
var d=10;
var e=20;
e=d+e;
d=e-d;
e=e-d;
console.log(d,e);
//=>让f和g交换位置
var f=10;
var g=20;
[f,g]=[g,f];
console.log(f,g);