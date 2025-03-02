let roller1 = document.querySelector(".roller1");
let roller2 = document.querySelector(".roller2");
let gun1 = document.querySelector(".gun1");
let gun2 = document.querySelector(".gun2");
let msg = document.querySelector(".msg");
let body = document.querySelector("body");
let main = document.querySelector("main");


let comBtn1 = document.querySelector(".btn1");
let comBtn2 = document.querySelector(".btn2");
let comBtn3 = document.querySelector(".btn3");

let userBtn1 = document.querySelector(".BTN1");
let userBtn2 = document.querySelector(".BTN2");
let userBtn3 = document.querySelector(".BTN3");


userBtn1.disabled = "true";
userBtn2.disabled = "true";
userBtn3.disabled = "true";

comBtn1.disabled = "true";
comBtn2.disabled = "true";
comBtn3.disabled = "true";

let target = 0;
let gunCell = 0;

let compScore = 0;
let userScore = 0;


let codeComp = 0;
let codeUser = 0;


let activeGun = false;



let rollerSpine = () => {
    roller1.style.animation = "rotateCircle 2s linear infinite";
    target = Math.floor(Math.random() * 6)
    gunCell = Math.floor(Math.random() * 6)
    setTimeout( () => {
        roller1.style.animation = "";
        activeGun = true;
        roller1.removeEventListener("click", rollerSpine);
    },2000)
}

roller1.addEventListener("click" , rollerSpine)

let comp =  () => {
    roller2.style.animation = "rotateCircle 2s linear infinite";
    target = Math.floor(Math.random() * 6)
    gunCell = Math.floor(Math.random() * 6)
    setTimeout( () => {
        roller1.addEventListener("click" , rollerSpine)
        roller2.style.animation = "";
        if(target === gunCell){
            codeUser++;
            clearHeartUser();
            vibreater();
            msg.innerText = "ohh you lost!"
            if(codeUser == 3){
                msg.innerText = "GAME OVER ..."
                gun1.removeEventListener("click", handleGunClick)
                roller1.removeEventListener("click",rollerSpine)
            }
            
        } else {
            msg.innerText = "you may have still chans"
        }
    },2000)
}


let handleGunClick = () => {
    if(activeGun){
        if(target === gunCell){
                codeComp++;
                clearHeartComp();
                vibreater();
            msg.innerText = "hurry! best shot!! "
            setTimeout( () => {
                comp();
            },2000)

            if(codeComp == 3){
                msg.innerText = "you win!"
                gun1.removeEventListener("click", handleGunClick);
                roller1.removeEventListener("click",rollerSpine)
            }
        } else {
            msg.innerText = "oops! miss that"
            setTimeout( () => {
                comp();
            },2000)
        }
        console.log("unlock");
        activeGun = false;
    }
    else {
        console.log("lock");
    }
}

gun1.addEventListener("click", handleGunClick)

let clearHeartComp = () => {
    if(codeComp == 1){
        comBtn1.style.background = "black";
    } else if(codeComp == 2){
        comBtn2.style.background = "black";
    } else if (codeComp == 3) {
        comBtn3.style.background = "black";
        // wincsreen();
    }
}



let clearHeartUser = () => {
    if(codeUser == 1){
        userBtn3.style.background = "black";
        body.style.backgroundImage = "url('blade1.png')";
    } else if(codeUser == 2){
        userBtn2.style.background = "black";
        body.style.backgroundImage = "url('blade2.png')";
    } else if(codeUser == 3){
        userBtn1.style.background = "black";
        // wincsreen();
    }
}

let vibreater = () => {
    main.style.animation = "vibrate 0.1s infinite linear";
            setTimeout( () => {
                main.style.animation  = "";
            },1000 )
}

let wincsreen = () => {
    gun1.style.visibility = "hidden";
    gun2.style.visibility = "hidden";
    roller1.style.visibility = "hidden";
    roller2.style.visibility = "hidden";
    userBtn1.stylr.visibility = "hidden";
    userBtn2.stylr.visibility = "hidden";
    userBtn3.stylr.visibility = "hidden";
    comBtn1.stylr.visibility = "hidden";
    comBtn2.stylr.visibility = "hidden";
    comBtn3.stylr.visibility = "hidden";

}
