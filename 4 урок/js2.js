
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


function add(object) {
    if (basket.length == 0 || !find(object.name)) {
        basket.push({ productId: object.name, ammount: 1, price: object.price });
    } else {
        basket.forEach(el => {
            if (el.productId == object.name) {   // Добавляем количество повторяющимся товарам
                el.ammount += 1;
            }
        });
    }
    function find(productId) {
        var cond = basket.some(function (e) {
            return e.productId == productId;
        });
        return cond;
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
    document.getElementById("span").innerHTML = (summBasket());
    document.getElementById("p1").innerHTML = ("Количество товара в Вашей корзине: " + summBasket());
    for (let i = 0; i < basket.length; i++) {
        basketName.push(" " + basket[i].productId + ": " + basket[i].price + "$" + " x " + basket[i].ammount + " = " + basket[i].price * basket[i].ammount + "$");
        document.getElementById("p2").innerHTML = (basketName);
        console.log(basketName[i]);
    }
    console.log("стоимость" + quantity + countBasketPrice() + "$");
    document.getElementById("p3").innerHTML = ("стоимость" + quantity + countBasketPrice() + "$");
}