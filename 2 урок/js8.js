console.log("");
console.log("Восьмое задание");

function getRandomArbitrary(min, max) {
    return  Math.floor(Math.random() * (max - min) + min) * Math.floor(1);
  }
x = getRandomArbitrary(1, 11);
y = getRandomArbitrary(2, 11);
console.log("Для данного примера переменным val и pow заданы случайные значения до 10, для степени от 2 до 10;");
console.log("выполнена функция power(" + x + ", " + y + ")" + ", где " + x + "- это число, " + y + " - это степень.");
var z =1;
var a;
function power(val, pow) {
    a = pow - 1;
    z = z * val;
   if (a == 0){
   return;
   } else {
    power(val, a);
   }
   return z;
}
console.log(power(x,y));