console.log("");
console.log("Третье задание");

var a = parseInt();
var b = parseInt();
function getRandomArbitrary(min, max) {
    return  Math.floor(Math.random() * (max - min) + min) * Math.floor(1);
  }
a = getRandomArbitrary(-10, 10);
b = getRandomArbitrary(-10, 10);
function number(x){
    if (x >= 0) {
        console.log("положительное число = " + x);
        }
        else {
         console.log("отрицательное число = " + x);
        }
}
console.log("переменная a");
number(a);
console.log("переменная b");
number(b);
if (a >= 0 & b >= 0) {
var x = a - b;
console.log("a и b положительные, вывести их разность: a - b = " + x);
}
else if (a <= 0 & b <= 0) {
var x = a * b;
console.log("а и b отрицательные, вывести их произведение: a * b = " + x);  
}
else {
var x = a + b;
console.log("а и b разных знаков, вывести их сумму: a + b = " + x);  
}