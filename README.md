JavaScript-Based-14.02-14.03.2021

Базовый курс JavaScript

Урок 1. Основы языка JavaScript

1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
3. *Чему будет равно JS-выражение 1000 + "108"?
4. *Самостоятельно разобраться с атрибутами тега script (async и defer)

Урок 2. Основные операторы JavaScript

1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
7. *Сравнить null и 0. Попробуйте объяснить результат.
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

Урок 3. Циклы, массивы, структуры данных

1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}

5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx

Урок 4. Объекты в JavaScript

1.Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

2.Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.

3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

Урок 5. Введение в DOM

Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*Заменить буквы, обозначающие фигуры, картинками.
*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: Пустая корзина должна выводить строку «Корзина пуста»; Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*Сделать так, чтобы товары в каталоге выводились при помощи JS: Создать массив товаров (сущность Product); При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.


Урок 6. Обработка событий в JavaScript

1. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

2. *Добавить в код галереи из методички функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.


Урок 7. Урок-практикум

1. Дополнить игру "Тетрис" своим функционалом по выбору: нестандартные виды фигур, отображение одной или нескольких следующих фигур рядом с полем, ведение и отображение таблицы рекордов.

2. * В реализованном ранее функционале работы с корзиной и каталогом товаров, добавить возможность фильтрации товаров по какому либо признаку, например по подстроке из названия или типу (потребуется добавить такое поле в каталоге).

Урок 8. Анонимные функции, замыкания
1. Для практикума из занятия 7 продумать, где можно применить замыкания.
2. Не выполняя кода, ответить, что выведет браузер и почему:
if (!("a" in window)) {
    var a = 1;
}
alert(a);
var b = function a(x) {
    x && a(--x);
};
alert(a);
function a(x) {
    return x * 2;
}
var a;
alert(a);
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
function a() {
    alert(this);
}
a.call(null);




