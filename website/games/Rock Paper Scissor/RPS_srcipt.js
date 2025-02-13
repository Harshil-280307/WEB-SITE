let paper = document.querySelector(".PAPER");
let rock = document.querySelector(".ROCK");
let scissor = document.querySelector(".SCISSOR");

let your;
let com;
let comp;

let msg = document.querySelector(".msg");

let gameActive = false;
let start = document.getElementById("start");

let yourScore = document.querySelector(".yourScore");
let compScore = document.querySelector(".compScore");

let Num = 0;
let Num2 = 0;

start.addEventListener("click", () => {
    yourScore.innerText = 0;
    compScore.innerText = 0;
    msg.style.color = 'white'
    gameActive = true;
    msg.innerText = "Game Started!";
});


let userPluse = () => {
    Num++;
    yourScore.innerText = Num;
   
}


let compPluse = () => {
    Num2++;
    compScore.innerText = Num2;
    
}   


let winn = () => {
    if(Num == 7){
        msg.style.color = "green";
        msg.innerText = "you win! the game";
        Num2 = 0;
        Num = 0;
        yourScore.innerText = Num;
        compScore.innertext = Num2;
        gameActive = false;
    } else if(Num2 == 7){
        msg.style.color = "red";
        msg.innerText = "you lost the game !!";
        Num2 = 0;
        Num = 0;
        compScore.innertext = Num;
        yourScore.innerText = Num2;
        gameActive = false;
    }
}

paper.addEventListener("click", () => {
    if (!gameActive) return;
    your = "paper";
    console.log("your " + your);
    com = Math.floor(Math.random()*3);
    ran();
    chack();
});

rock.addEventListener("click", () => {
    if (!gameActive) return;
    your = "rock";
    console.log("your " + your);
    com = Math.floor(Math.random()*3);
    ran();
    chack();
});

scissor.addEventListener("click", () => {
    if (!gameActive) return;
    your = "scissor";
    console.log("your " + your);
    com = Math.floor(Math.random()*3);
    ran();
    chack();
});

let ran = () => {
    if(com == 0){
        comp = "paper";
    } else if (com == 1){
        comp = "rock";
    } else {
        comp = "scissor";
    }    
}



let chack = () => {
    if(comp == your){
        console.log("game drow");
        msg.style.color = "white";
        msg.innerText = "match drow !"
    } else if(comp == "paper"){
        if(your == "rock"){
            console.log("comp win");
            compPluse();
            msg.style.color = "yellow";
            msg.innerText = "Defet!";
            winn();
        } else if(your == "scissor") {
            console.log("you win")
            userPluse();
            msg.style.color = "blue";
            msg.innerText = "vectory !!";
            winn();
        }
    } else if(comp == "rock"){
        if(your == "scissor"){
            console.log("comp win");
            compPluse();
            msg.style.color = "yellow";
            msg.innerText = "Defet!";
            winn();
        } else if(your == "paper"){
            console.log("you win");
            userPluse();
            msg.style.color = "blue";
            msg.innerText = "vectory !!";
            winn();
        }    
    } else if(comp == "scissor"){
        if(your == "paper"){
            console.log("comp win");
            compPluse();
            msg.style.color = "yellow";
            msg.innerText = "Defet!";
            winn();
        } else if(your == "rock"){
            console.log("you win");
            userPluse();
            msg.style.color = "blue";
            msg.innerText = "vectory !!";
            winn();
        }
    }
}