const board = document.getElementById('board')

const columns = 7

const rows = 6

let k = 0;

let turn = 0 ;

let player = ['red','blue'];

let gameOver = false; 

let start = document.querySelector(".start");

let msg = document.getElementById("result");

let msgBox = document.getElementById("outcome");


let playerSpan = document.getElementById('player')

// .addEventListener("click", () => {
//     turn = 1 - turn ;
//     playerSpan.innerHTML = turn + 1;
// })

let makeDoard = () =>  {
    for (let i = 0 ; i < columns ; i++) {
        for (let j = 0 ; j < rows ; j++) {
            const div = document.createElement('button');
            div.classList.add("cell");
            div.setAttribute("id",`cell`+k);
            board.appendChild(div)
            k++;
        }
    }
}

 

makeDoard();

const cells = document.getElementsByClassName('cell');

for(let cell of cells){
    cell.addEventListener("click" , () => {

        if(gameOver) {
            stopGame();
        }

        if (cell.style.background !== "") {
            return; // Cell is already filled, so do not change it
        }

        turn = 1 - turn ;
        playerSpan.innerHTML = turn + 1;
        cell.style.background = player[turn];
    })
}

let stopGame = () => {
    for(let stop of cells){
        stop.disabled = true;
    }
}

let startGame= () => {
    for(let stop of cells){
        stop.disabled = false;
        start.innerText = "Restart"
    }
}

let RestartGame= () => {
    for(let color of cells){
        color.style.background = "";
        msg.innerText = "";
        msgBox.style.marginBottom = "0px";
        msgBox.style.marginTop = "0px";

    }
}


stopGame();

start.addEventListener("click", () => {
    gameOver = false;
    startGame();
    console.log("hello");
    RestartGame();
})

let celId =[];

for(let a = 0 ; a < 42; a++ ){
    celId[a] = document.getElementById(`cell${a}`);
    celId[a].addEventListener("click", () => {
        checkWin();
    });
};



let checkWin = () => {
    let rows = 6; // Grid has 6 rows
    let cols = 7; // Grid has 7 columns

    // Check horizontal wins (same as before)
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let idx = row * cols + col; // Convert (row, col) to 1D index

            if (
                celId[idx] && celId[idx].style.background !== "" &&
                celId[idx].style.background === celId[idx + 1]?.style.background &&
                celId[idx].style.background === celId[idx + 2]?.style.background &&
                celId[idx].style.background === celId[idx + 3]?.style.background
            ) {
                console.log(`winnner is ${player[turn]}`);
                msg.innerText = `winnner is ${player[turn]}`;
                msgBox.style.marginBottom = "50px";
                msgBox.style.marginTop = "50px";
                gameOver = true;
                stopGame();
                return true;
            }
        }
    }

    // Check vertical wins using the allVerCol array
    for (let i = 0; i < allVerCol.length; i++) {
        for (let j = 0; j < allVerCol[i].length; j++) {
            let [idx1, idx2, idx3, idx4] = allVerCol[i][j];

            // Check if the 4 indices have the same background color
            if (
                celId[idx1] && celId[idx2] && celId[idx3] && celId[idx4] &&
                celId[idx1].style.background !== "" &&
                celId[idx1].style.background === celId[idx2].style.background &&
                celId[idx1].style.background === celId[idx3].style.background &&
                celId[idx1].style.background === celId[idx4].style.background
            ) {
                console.log(`winnner is ${player[turn]}`);
                gameOver = true;
                msg.innerText = `winnner is ${player[turn]}`;
                msgBox.style.marginBottom = "50px";
                msgBox.style.marginTop = "50px";
                stopGame();
                return true;
            }
        }
    }

    return false; // No win found
};




