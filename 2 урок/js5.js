console.log("");
console.log("Пятое задание");

var a = parseInt();
var b = parseInt();
function getRandomArbitrary(min, max) {
    return  Math.floor(Math.random() * (max - min) + min) * Math.floor(1);
  }
a = getRandomArbitrary(-10, 10);
b = getRandomArbitrary(-10, 10);
console.log("Для данного примера переменным a и b заданы случайные значения от -10 до 10: " + "a = " + a + "; b = " + b + ";");
function addition(x,y) {
    return x + y;
}

function subtraction(x,y) {
    return x - y;
}

function division (x,y) {
    return x / y;
}

function multiplication (x,y) {
    return x * y;
}

console.log("операция сложения a + b => " + a + " + " + b + " = " + addition(a,b));
console.log("операция вычитания a - b => " + a + " - " + b + " = " + subtraction(a,b));
console.log("операция деления a / b => " + a + " / " + b + " = " + division(a,b));
console.log("операция умножения a * b => " + a + " * " + b + " = " + multiplication(a,b));