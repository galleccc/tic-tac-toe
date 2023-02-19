let sq = document.querySelectorAll (".sq");
let element;
let dep = 1;
let selectedSquares = []; // массив для хранения выбранных клеток

for (let index = 0; index < sq.length; index++) {
    element = sq[index]
    element.addEventListener ("click", (e) =>{
        let num = e.target.id
        let el = document.getElementById (num)

        // проверяем, была ли клетка уже выбрана
        if (selectedSquares.includes(num)) {
            return; // если да, то ничего не делаем
        }

        const fi = document.createElement("p");
        el.appendChild(fi);
        let cli = "fi" + (index + 1);
        fi.classList.add (cli);

        if (dep % 2 == 1) {
            fi.classList.add("square");
        } else {
            fi.classList.add("circle");
        }

        dep++;
        selectedSquares.push(num); // добавляем выбранную клетку в массив
    })
}
//Здесь переменная dep используется для отслеживания того, сколько раз был выполнен клик на элементе, и класс "square" или "circle" добавляется в зависимости от того, четное ли количество кликов было выполнено. Каждый раз, когда клик выполняется, переменная dep увеличивается на 1.





// sq усі клітини
// elment дорівнює усіл елементам. і ми додаємо на нього listener click
// dep елемент який має підказувати у майбтньому що в нас має буду (квадрат чи коло)
// num - получає назву дласа sq
// cla - прибирає 1 клас (у sq їх 2(до цього була помилка якщо я не прибирав цей клас))
// el - це сама клітина у якій повинна бути фігура
// fi - це сама фігура яка повинна бути у el 
// 15 рядок відповідає за те щоб прив'язати fi до el (але в ньому і є та сама помилка)