var number = prompt("Введите число от 0 до 999");

function object(one, dozens, hundreds) {
    this.сотни = +hundreds
    this.десятки = +dozens;
    this.единицы = +one;
}

let numberParse = parseInt(number);
if (numberParse > 999 || numberParse < 0 || isNaN(numberParse)) {
    alert("Вы не выполнили указанное условие!");
} else {
    if (numberParse > 0 && numberParse < 10) {
        console.log(new object(number[0],0,0));
    } else if (numberParse > 9 && numberParse < 100) {
        console.log(new object(number[1], number[0],0));
    } else {
        console.log(new object(number[2], number[1], number[0]));
    }
}
