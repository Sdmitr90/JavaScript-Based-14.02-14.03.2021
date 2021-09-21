function product(name, price) {
  this.name = name;
  this.price = price;
}

let object_1 = new product("jeans", 125);
let object_2 = new product("pullover", 155);
let object_3 = new product("crosses", 185);
let object_4 = new product("cap", 40);



var basket = [];

var quantity = " товаров:";

let b1 = document.createElement('button');
let b2 = document.createElement('button');
let b3 = document.createElement('button');
let b4 = document.createElement('button');
let b1_1 = document.createElement('button');
let b2_1 = document.createElement('button');
let b3_1 = document.createElement('button');
let b4_1 = document.createElement('button');
let b5 = document.createElement('button');
b5.className = "clearAll"
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
b1.onclick = function () { add(object_1); }
b2.onclick = function () { add(object_2); }
b3.onclick = function () { add(object_3); }
b4.onclick = function () { add(object_4); }
b1_1.onclick = function () { clear_object(object_1); }
b2_1.onclick = function () { clear_object(object_2); }
b3_1.onclick = function () { clear_object(object_3); }
b4_1.onclick = function () { clear_object(object_4); }
b5.onclick = function () { clear_all(); }
p1.id = "p1";
p2.id = "p2";
p3.id = "p3";
div1.prepend(b1); div1.append(b2); div1.append(b3); div1.append(b4);
div2.prepend(b1_1); div2.append(b2_1); div2.append(b3_1); div2.append(b4_1);
div3.prepend(b5);
div3.append(p1); div3.append(p2); div3.append(p3);
one.prepend(div3);
one.prepend(div2);
one.prepend(div1);
b1.innerHTML = "Jeans";
b2.innerHTML = "Pullover";
b3.innerHTML = "Crosses";
b4.innerHTML = "Cap";
b1_1.innerHTML = "clear Jeans";
b2_1.innerHTML = "clear Pullover";
b3_1.innerHTML = "clear Crosses";
b4_1.innerHTML = "clear Cap";
b5.innerHTML = "clear all";
p1.innerHTML;
p2.innerHTML = "Ваша корзина пуста!";
p3.innerHTML;

function add(object) {
  // первый фильтр на повторяющиеся товары, для последующей постановки условий
  function find(productId) {
    var cond = basket.some(function (e) {
      return e.productId == productId;
    });
    return cond;
  }

  if (basket.length == 0) {
    basket.push({ productId: object.name, ammount: 1, price: object.price });
  } else if (find(object.name)) {
    for (var productId of basket) {
      if (productId.productId == object.name) {   // Добавляем количество повторяющимся товарам
        productId.ammount += 1;
      }
    }
  } else {
    basket.push({ productId: object.name, ammount: 1, price: object.price });
  }

  countBasketPrice();
  summBasket();
  basketProduct();
}
function clear_all() {
  basket.splice(0, 100);
  countBasketPrice();
  summBasket();
  basketProduct();
  if (basket.length == 0) {
    document.getElementById("p2").innerHTML = ("Ваша корзина пуста!");
  }
  document.getElementById("p3").innerHTML = ("стоимость" + quantity + countBasketPrice() + "$");

}

function clear_object(object) {
  let index = basket.findIndex(el => el.productId == object.name);
  console.log(index);
  if (index > -1) {
    basket.splice(index, 1);
  }
  basketProduct();

  if (basket.length == 0) {
    document.getElementById("p2").innerHTML = ("Ваша корзина пуста!");
  }
  document.getElementById("p3").innerHTML = ("стоимость" + quantity + countBasketPrice() + "$");

}

function countBasketPrice() {
  var basketSumm = 0; // Общая стоимость товаров в корзине
  for (let i = 0; i < basket.length; i++) {
    basketSumm += basket[i].ammount * basket[i].price
  }
  return basketSumm;
}

function summBasket() {
  var summ = 0; // Количество товаров в корзине
  for (let i = 0; i < basket.length; i++) {
    summ = summ + basket[i].ammount;
  }
  return summ;
}

function basketProduct() {
  var basketName = [];



  console.log("Количество товара в Вашей корзине: " + summBasket());

  //document.getElementById("span").innerHTML = (summBasket()); Для изображения корзины

  document.getElementById("p1").innerHTML = ("Количество товара в Вашей корзине: " + summBasket());

  for (let i = 0; i < basket.length; i++) {
    basketName.push(" " + basket[i].productId + ": " + basket[i].price + "$" + " x " + basket[i].ammount + " = " + basket[i].price * basket[i].ammount + "$");
    document.getElementById("p2").innerHTML = (basketName);
    console.log(basketName[i]);
  }
  console.log("стоимость" + quantity + countBasketPrice() + "$");
  document.getElementById("p3").innerHTML = ("стоимость" + quantity + countBasketPrice() + "$");
}