// Данные:
//      Игровое поле (прямоугольное, в каждой клетке есть свое состояние)
var gameBoard = {
    cells: [],
    width: 0,
    height: 0,
    gameFinished: false,
    player: {}
}

//      Состояние игрока (координаты на игровом поле, направление, есть ли ключ)
var player = {
    coords: {
        x: 0,
        y: 0
    },
    direction: 'Up',
    haveKey: false,
    gameBoard: {}
}

//      Шаблон(ы) игрового поля
var BOARD = ["==========",
             "=        =",
             "=  K     =",
             "=        =",
             "=        =",
             "=     E  =",
             "=        =",
             "=        =",
             "=        =",
             "=========="];
var STARTPOSITION = {
    x: 1,
    y: 8,
    direction: "Right"
}

// Алгоритм:

//  Инициализация игры:
//     Игровое поле:
//        Копирование начального состояния из шаблона
gameBoard.init = function (template, player) {
    this.height = template.length;
    this.width = template[0].length;
    this.cells = [];
    this.el = document.getElementById('board');
    for (var j = 0; j < this.height; j++) {
        this.cells.push([]);
        for (var i = 0; i < this.width; i++) {
            this.cells[j].push({});
            var el = document.createElement('div');
            el.classList.add('cell', 'fa');
            this.cells[j][i].el = el;
            switch (template[j][i]) {
                case ' ':
                    this.cells[j][i].type = 'Free';
                    break;
                case 'K':
                    this.cells[j][i].type = 'Key';
                    el.classList.add('fa-key');
                    break;
                case 'E':
                    this.cells[j][i].type = 'Exit';
                    el.classList.add('fa-sign-in');
                    break;
                default:
                    this.cells[j][i].type = 'Wall';
                    el.classList.add('fa-bars');
                    break; 
            }
            this.el.appendChild(el);
        }
    }
    this.gameFinished = false;
    this.player = player;
}

//     Состояние игрока
//          начальные координаты + направление
//          Ключ отсутствует
player.init = function (startPosition, gameBoard) {
    this.coords.x = startPosition.x;
    this.coords.y = startPosition.y;
    this.direction = startPosition.direction;
    this.haveKey = false;
    this.gameBoard = gameBoard;
    this.gameBoard.cells[this.coords.y][this.coords.x].el.classList.add('fa-child');
}

gameBoard.init(BOARD, player);
player.init(STARTPOSITION, gameBoard);

var LEFTDIRECTION = {
    Left: 'Down',
    Up: 'Left',
    Right: 'Up',
    Down: 'Right'
}

var RIGHTDIRECTION = {
    Left: 'Up',
    Up: 'Right',
    Right: 'Down',
    Down: 'Left'
}

// Функция отображения поля
// gameBoard.renderBoard = function() {
//     for (var j = 0; j < this.height; j++) {
//         var line = '';
//         for (var i = 0; i < this.width; i++) {
//             if (this.player.coords.x === i && this.player.coords.y === j) {
//                 line += 'P';
//             } else {
//                 switch (this.cells[j][i].type) {
//                     case 'Free':
//                         line += ' ';
//                         break;
//                     case 'Key':
//                         line += 'K';
//                         break;
//                     case 'Exit':
//                         line += 'E';
//                         break;
//                     case 'Wall':
//                         line += '=';
//                         break;
//                 }
//             }
//         }
//         console.log(line + ' : ' + (j+'').padStart(3));
//     }
//     console.log(this.player);
// }

// Функция проверки возможности сделать ход
var DX = {
    Left: -1,
    Up: 0,
    Right: 1,
    Down: 0
}

var DY = {
    Left: 0,
    Up: -1,
    Right: 0,
    Down: 1
}

player.canMove = function() {
    var newx = this.coords.x + DX[this.direction];
    var newy = this.coords.y + DY[this.direction];

    if (this.gameBoard.cells[newy][newx].type === 'Wall') {
        return false;
    } else { 
        return true
    }
}

// Функция проверки найденного ключа
player.checkKeyFound = function() {
    var newx = this.coords.x + DX[this.direction];
    var newy = this.coords.y + DY[this.direction];

    if (!this.haveKey && this.gameBoard.cells[newy][newx].type === 'Key') {
        log('Вы нашли ключ! Ищите дверь!');
        this.gameBoard.cells[newy][newx].type = 'Free';
        this.gameBoard.cells[newy][newx].el.classList.remove('fa-key');
        this.haveKey = true;
    }
}

// Функция проверки найденного выхода
player.checkExitFound = function() {
    var newx = this.coords.x + DX[this.direction];
    var newy = this.coords.y + DY[this.direction];

    if (this.haveKey && this.gameBoard.cells[newy][newx].type === 'Exit') {
        log('Вы нашли выход и открыли дверь!');
        log('Поздравляю, вы выиграли!')
        this.gameBoard.gameFinished = true;
    }
}

// Функция перемещения игрока
player.move = function() {
    this.gameBoard.cells[this.coords.y][this.coords.x].el.classList.remove('fa-child');
    this.coords.x = this.coords.x + DX[this.direction];
    this.coords.y = this.coords.y + DY[this.direction];
    this.gameBoard.cells[this.coords.y][this.coords.x].el.classList.add('fa-child');
}

function leftHandler() {
    player.direction = LEFTDIRECTION[player.direction];
}

function rightHandler() {
    player.direction = RIGHTDIRECTION[player.direction];
}

function goHandler() {
//              Проверить возможность сделать шаг
            if (player.canMove()) {
//              Проверка найден ли ключ
                player.checkKeyFound();                
//              Проверка найден ли выход
                player.checkExitFound();
//              Изменение положения игрока
                player.move()
            }
}

function log(message) {
    var l = document.getElementById('messages');

    l.innerText = message + '\n' + l.innerText;
}

document.getElementById('leftButton').onclick = leftHandler;
document.getElementById('rightButton').onclick = rightHandler;
document.getElementById('goButton').onclick = goHandler;

//  Цикл игры:
// while (!gameBoard.gameFinished) {
// //     Вывести состояние поля
// //          Вывести поле
// //          Отобразить игрока
//     // gameBoard.renderBoard();
// //     Спросить шаг у пользователя
//     var step = prompt('Что вы хотите сделать? (l - влево, r - вправо, g - вперед, q - выход)');
// //     Выполнить шаг
//     switch (step) {
// //          Поворот:
// //              Вычислить новое направление
// //              Изменить состояние игрока
//         case 'l':
//             player.direction = LEFTDIRECTION[player.direction];
//             break;
//         case 'r':
//             player.direction = RIGHTDIRECTION[player.direction];
//             break;
// //          Вперед:
//         case 'g':
// //              Проверить возможность сделать шаг
//             if (player.canMove()) {
// //              Проверка найден ли ключ
//                 player.checkKeyFound();                
// //              Проверка найден ли выход
//                 player.checkExitFound();
// //              Изменение положения игрока
//                 player.move()
//             }
//             break;
//         case 'q':
//             gameBoard.gameFinished = true;
//             break;
//         default:
//             alert('Неизвестная команда!');
//             break;
//     }
// }

// //  Завершение:
// // Поздравление
// console.log('Поздравляю, вы выиграли!')