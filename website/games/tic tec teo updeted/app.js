let boxes = document.querySelectorAll(".box");
let turn = "X";
let mg = document.querySelector(".winn");
let gameActive = false;

document.getElementById("selectX").addEventListener("click", () => {
    turn = "X";
    mg.innerText = "You selected X";
});

document.getElementById("selectO").addEventListener("click", () => {
    turn = "O";
    mg.innerText = "You selected O";
});



document.getElementById("start").addEventListener("click", () => {
    gameActive = true;
    mg.innerText = "Game Started!";
});

document.getElementById("restart").addEventListener("click", () => {
    gameActive = false;
    mg.innerText = "PLAY GAME";
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#52796f";
        box.style.color = "black";
    });
});



let wipartterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive) return;
        box.innerText = turn;
        box.disabled = true;
        turn = turn === "X" ? "O" : "X";
        chackWin();
    });
});

const chackWin = () => {
    for (let pattern of wipartterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            mg.innerText = `WINNER IS ${pos1Val}`;
            gameActive = false;
            pattern.forEach(index => {
                boxes[index].style.backgroundColor = "black";
                boxes[index].style.color = "red";
            });
        }
    }
};