let boxes = document.querySelectorAll(".box");
let turnO = true; // playerX ,  payer O
let count = 0; // to track draw
let mg = document.querySelector(".winn");

let wipartterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        chackWin();
    })
});

const chackWin = () => {
    for(let pattern of wipartterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`winner is ${ pos1Val }`);
                for(let ds of boxes){
                    ds.disabled = true;
                }
                mg.innerText = (`WINNER IS  ${pos1Val}`)
                pattern.forEach(index => {
                    boxes[index].style.backgroundColor = "black";
                    boxes[index].style.color = "red";
                })
            }
        }
    }
    
};