var table = document.createElement("table");
var letters = "abcdefgh"                       // названия ячеек
function ChessBoard(h, w) {
    for (var i = 1; i < h; i++) {
        var tr = document.createElement('tr');     // формируем строки
        for (var j = 1; j < w; j++) {
            var td = document.createElement('td'); // создаем ячейки
            if (i == 1 || i == 10) {                     // стиль пустых строк   
                td.className = "noBorder";
                if (j >= 2 && j <= 9) {
                    td.innerHTML = letters[j - 2];        // выведение названия ячеек
                }
            } else if (j == 1 || j == 10) {          // стиль пустых столбцов
                td.className = "noBorder";
                if (i >= 2 && i <= 9) {
                    td.innerHTML = -(i - 10);           // выведение названия строк
                }
            } else if (i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            if (i == 3) {                                     // черные фигуры
                if (j >= 2 && j <= 9) {
                    td.innerHTML = "<img src='./figures/pawnBlack.svg'>";
                }
            } else if (i == 2) {
                if (j == 2 || j == 9) {
                    td.innerHTML = "<img src='./figures/rookBlack.svg'>";
                } else if (j == 3 || j == 8) {
                    td.innerHTML = "<img src='./figures/horseBlack.svg'>";
                } else if (j == 4 || j == 7) {
                    td.innerHTML = "<img src='./figures/elephantBlack.svg'>";
                } else if (j == 5) {
                    td.innerHTML = "<img src='./figures/qeenBlack.svg'>";
                } else if (j == 6) {
                    td.innerHTML = "<img src='./figures/kingBlack.svg'>";
                }

            } else if (i == 8) {                             // белые фигуры
                if (j >= 2 && j <= 9) {
                    td.innerHTML = "<img src='./figures/pawnWhite.svg'>";
                }
            } else if (i == 9) {                                          
                if (j == 2 || j == 9) {
                    td.innerHTML = "<img src='./figures/rookWhite.svg'>";
                } else if (j == 3 || j == 8) {
                    td.innerHTML = "<img src='./figures/horseWhite.svg'>";
                } else if (j == 4 || j == 7) {
                    td.innerHTML = "<img src='./figures/elephantWhite.svg'>";
                } else if (j == 5) {
                    td.innerHTML = "<img src='./figures/qeenWhite.svg'>";
                } else if (j == 6) {
                    td.innerHTML = "<img src='./figures/kingWhite.svg'>";
                }
            } 
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
ChessBoard(11, 11);
