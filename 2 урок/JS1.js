console.log("Первое задание:");
var a = 1, b = 1, c, d;
c = ++a; console.log("c = ++a; => " + c);           // 2 a = 2; префиксная форма ++a увеличивает a и возвращает новое значение 2
d = b++; console.log("d = b++; => " + d);           // 1 b = 1; постфиксная форма b++ также увеличивает b, но возвращает старое значение 1
c = (2+ ++a); console.log("c = (2+ ++a); => " + c);      // 5 a = 3, b = 2; префиксная форма ++a увеличивает a и возвращает новое значение 3
d = (2+ b++); console.log("d = (2+ b++); => " + d);      // 4 b = 2; постфиксная форма b++ также увеличивает b, но возвращает старое значение 2
console.log("a => " + a);                    // 3 a = 3, b = 3;
console.log("b => " + b);                    // 3 b = 3;  
