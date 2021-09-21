console.log("");
console.log("Шестое задание");

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

function division(x,y) {
    return x / y;
}

function multiplication(x,y) {
    return x * y;
}

function getRandomNumberOperation(min, max) {
    return  Math.floor(Math.random() * (max - min) + min) * Math.floor(1);
  }
var numberOperation =  getRandomNumberOperation(1, 5);

console.log("А также случайным образом выбрана одна из арефмитических операций: 1) сложение; 2) вычитание; 3) деление; 4) умножение");

function mathOperation(arg1, arg2, Operation){
switch (Operation){
        case 1:
            return addition(arg1,arg2);
        case 2:
            return subtraction(arg1,arg2);
        case 3:
            return division(arg1,arg2);
        case 4:
            return multiplication(arg1,arg2);    
    }
}
var numb;
if (numberOperation == 1){
numb = "сложение"
} else if (numberOperation == 2){
numb = "вычитание"    
} else if (numberOperation == 3){
    numb = "деление"
} else {
    numb = "умножение"
}
console.log("результат вычисления функции mathOperation(" + a + ", " + b + ", " + numb + ") = "  + mathOperation(a, b, numberOperation));
