let B1box1 = document.getElementById("1box1"); let B1box1Text;
let B1box2 = document.getElementById("1box2"); let B1box2Text;
let B1box3 = document.getElementById("1box3"); let B1box3Text;
let B1box4 = document.getElementById("1box4"); let B1box4Text;
let B1box5 = document.getElementById("1box5"); let B1box5Text;
let B1box6 = document.getElementById("1box6"); let B1box6Text;
let B1box7 = document.getElementById("1box7"); let B1box7Text;
let B1box8 = document.getElementById("1box8"); let B1box8Text;
let B1box9 = document.getElementById("1box9"); let B1box9Text;

let B2box1 = document.getElementById("2box1"); let B2box1Text;
let B2box2 = document.getElementById("2box2"); let B2box2Text;
let B2box3 = document.getElementById("2box3"); let B2box3Text;
let B2box4 = document.getElementById("2box4"); let B2box4Text;
let B2box5 = document.getElementById("2box5"); let B2box5Text;
let B2box6 = document.getElementById("2box6"); let B2box6Text;
let B2box7 = document.getElementById("2box7"); let B2box7Text;
let B2box8 = document.getElementById("2box8"); let B2box8Text;
let B2box9 = document.getElementById("2box9"); let B2box9Text;

let B3box1 = document.getElementById("3box1"); let B3box1Text;
let B3box2 = document.getElementById("3box2"); let B3box2Text;
let B3box3 = document.getElementById("3box3"); let B3box3Text;
let B3box4 = document.getElementById("3box4"); let B3box4Text;
let B3box5 = document.getElementById("3box5"); let B3box5Text;
let B3box6 = document.getElementById("3box6"); let B3box6Text;
let B3box7 = document.getElementById("3box7"); let B3box7Text;
let B3box8 = document.getElementById("3box8"); let B3box8Text;
let B3box9 = document.getElementById("3box9"); let B3box9Text;

let B4box1 = document.getElementById("4box1"); let B4box1Text;
let B4box2 = document.getElementById("4box2"); let B4box2Text;
let B4box3 = document.getElementById("4box3"); let B4box3Text;
let B4box4 = document.getElementById("4box4"); let B4box4Text;
let B4box5 = document.getElementById("4box5"); let B4box5Text;
let B4box6 = document.getElementById("4box6"); let B4box6Text;
let B4box7 = document.getElementById("4box7"); let B4box7Text;
let B4box8 = document.getElementById("4box8"); let B4box8Text;
let B4box9 = document.getElementById("4box9"); let B4box9Text;

let B5box1 = document.getElementById("5box1"); let B5box1Text;
let B5box2 = document.getElementById("5box2"); let B5box2Text;
let B5box3 = document.getElementById("5box3"); let B5box3Text;
let B5box4 = document.getElementById("5box4"); let B5box4Text;
let B5box5 = document.getElementById("5box5"); let B5box5Text;
let B5box6 = document.getElementById("5box6"); let B5box6Text;
let B5box7 = document.getElementById("5box7"); let B5box7Text;
let B5box8 = document.getElementById("5box8"); let B5box8Text;
let B5box9 = document.getElementById("5box9"); let B5box9Text;

let B6box1 = document.getElementById("6box1"); let B6box1Text;
let B6box2 = document.getElementById("6box2"); let B6box2Text;
let B6box3 = document.getElementById("6box3"); let B6box3Text;
let B6box4 = document.getElementById("6box4"); let B6box4Text;
let B6box5 = document.getElementById("6box5"); let B6box5Text;
let B6box6 = document.getElementById("6box6"); let B6box6Text;
let B6box7 = document.getElementById("6box7"); let B6box7Text;
let B6box8 = document.getElementById("6box8"); let B6box8Text;
let B6box9 = document.getElementById("6box9"); let B6box9Text;

let B7box1 = document.getElementById("7box1"); let B7box1Text;
let B7box2 = document.getElementById("7box2"); let B7box2Text;
let B7box3 = document.getElementById("7box3"); let B7box3Text;
let B7box4 = document.getElementById("7box4"); let B7box4Text;
let B7box5 = document.getElementById("7box5"); let B7box5Text;
let B7box6 = document.getElementById("7box6"); let B7box6Text;
let B7box7 = document.getElementById("7box7"); let B7box7Text;
let B7box8 = document.getElementById("7box8"); let B7box8Text;
let B7box9 = document.getElementById("7box9"); let B7box9Text;

let B8box1 = document.getElementById("8box1"); let B8box1Text;
let B8box2 = document.getElementById("8box2"); let B8box2Text;
let B8box3 = document.getElementById("8box3"); let B8box3Text;
let B8box4 = document.getElementById("8box4"); let B8box4Text;
let B8box5 = document.getElementById("8box5"); let B8box5Text;
let B8box6 = document.getElementById("8box6"); let B8box6Text;
let B8box7 = document.getElementById("8box7"); let B8box7Text;
let B8box8 = document.getElementById("8box8"); let B8box8Text;
let B8box9 = document.getElementById("8box9"); let B8box9Text;

let B9box1 = document.getElementById("9box1"); let B9box1Text;
let B9box2 = document.getElementById("9box2"); let B9box2Text;
let B9box3 = document.getElementById("9box3"); let B9box3Text;
let B9box4 = document.getElementById("9box4"); let B9box4Text;
let B9box5 = document.getElementById("9box5"); let B9box5Text;
let B9box6 = document.getElementById("9box6"); let B9box6Text;
let B9box7 = document.getElementById("9box7"); let B9box7Text;
let B9box8 = document.getElementById("9box8"); let B9box8Text;
let B9box9 = document.getElementById("9box9"); let B9box9Text;

// Select 1 to 9 number by using btn(button) Id
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

// For save 1 to 9 clicked button value
let print = 0;

// Select the box elements (using an array of IDs for easier access)
let boxes = [];
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        boxes.push(document.getElementById(`${i}box${j}`));
    }
}

// Select the button elements for digits
let btns = [];
for (let i = 1; i <= 9; i++) {
    btns.push(document.getElementById(`btn${i}`));
}

// Track the current number selected
let selectedNumber = 0;

// Event listener for selecting a number
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        selectedNumber = index + 1;
    });
});


function generateSudoku() {
    let board = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    // Reset the red background from all boxes
    boxes.forEach(box => {
        box.style.backgroundColor = ""; // Reset the background color to default
    });

    // Loop to fill the boxes based on the generated board
    let count = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            boxes[count].innerText = board[i][j] === 0 ? "" : board[i][j];
            count++;
        }
    }
}

// Event listener for placing the selected number on a box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Get the index of the clicked box
        const index = boxes.indexOf(box);

        // Get the row and column based on the box index
        const row = Math.floor(index / 9);
        const col = index % 9;

        // If the box is empty and the selected number is valid, place the number
        if (box.innerText === "" && selectedNumber !== 0) {
            if (isValidMove(row, col, selectedNumber)) {
                box.innerText = selectedNumber;
            } else {
                // turn the box red temporarily
                box.style.backgroundColor = "red";
                setTimeout(() => {
                    box.style.backgroundColor = "";
                }, 1000);
            }
        }
    });
});

// Check the number be placed in the selected box
function isValidMove(row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (boxes[row * 9 + i].innerText == num) {
            return false;
        }
    }

    // Check column
    for (let i = 0; i < 9; i++) {
        if (boxes[i * 9 + col].innerText == num) {
            return false;
        }
    }

    // Check 3x3 block;
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (boxes[i * 9 + j].innerText == num) {
                return false;
            }
        }
    }

    return true;
}

function checkGameCompleted() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = parseInt(boxes[i * 9 + j].innerText, 10);
            if (isNaN(num) || !isValidMove(i, j, num)) {
                return false;
            }
        }
    }
    alert("Congratulations! You've solved the puzzle!");
    return true;
}

document.getElementById("startButton").addEventListener("click", function() {
    generateSudoku();
    this.innerText = "restart";
});



document.getElementById("checkButton").addEventListener("click", checkGameCompleted);

document.getElementById("restartButton").addEventListener("click", () => {
    generateSudoku();
});

// let ook = document.getElementById("startButton");
// ook.addEventListener("click", () => {
//     okk.innerText = null;
// })