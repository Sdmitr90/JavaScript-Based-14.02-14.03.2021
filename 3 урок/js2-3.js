
console.log("");
console.log("Задание №2-3:  реализация корзины");

function product (name, price){
  this.name = name;
  this.price = price;
  }
  
  let object_1 = new product("jeans", 125);
  let object_2 = new product("pullover", 155);
  let object_3 = new product("crosses", 185);
  let object_4 = new product("cap", 40);
  
  var basket = [];

  
  function add(object){
  basket.push(object);
  countBasketPrice();
  basketProduct();
  console.log("стоимость" + quantity  + countBasketPrice() + "$");
  console.log(basket.length);
  document.getElementById("p3").innerHTML = ("стоимость" + quantity  + countBasketPrice() + "$");
  }
  function cler(){
  basket.splice(-1,1);
  countBasketPrice();
  basketProduct();
  console.log("стоимость" + quantity  + countBasketPrice() + "$");
  console.log(basket.length);
  if (basket.length == 0){
  document.getElementById("p2").innerHTML = ("Ваша корзина пуста!");
  }
  document.getElementById("p3").innerHTML = ("стоимость" + quantity  + countBasketPrice() + "$");
  }
  
  function countBasketPrice() {
  var priceProduct = 0;
  for(let i = 0; i < basket.length; ++i){
  priceProduct = priceProduct + basket[i].price;
  }
  return priceProduct;
  }
  
  if (basket.length > 4 || basket.length == 0 ){
  var quantity = " товаров:";
  } else if (basket.length == 1){
  quantity = " товар:";
  } else {
  quantity = " товара:";
  }
  
 basketProduct();
 
  function basketProduct() {
  console.log("Количество товара в Вашей корзине: " + basket.length);
  document.getElementById("p1").innerHTML = ("Количество товара в Вашей корзине: " + basket.length);
  var basketName = [];
  for (let i = 0; i < basket.length; i++){
  console.log(basket[i].name + ": " + basket[i].price + "$");
  basketName.push(" " + basket[i].name + ": "+ basket[i].price + "$");

  document.getElementById("p2").innerHTML = (basketName);
  }
  }

  
