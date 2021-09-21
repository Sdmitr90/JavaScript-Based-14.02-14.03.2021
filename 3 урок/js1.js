
console.log("");
console.log("Задание №1: С помощью цикла while вывести все простые числа в промежутке от 0 до 100");

var primeNumbers = [];
  var numbers = Array(101).fill(true);
for (var i = 2; i < 100; ++i){
  if (numbers[i]){
   primeNumbers.push(i);
    for (var x = i*i; x < 100; x += i){
      numbers[x] = false;
    }
  }
}



var x = 0;
while (x < primeNumbers.length) {
  console.log(primeNumbers[x++]);
}