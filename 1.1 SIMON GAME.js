let gameSequence=[];
let userSequence=[];

let btns=["yellow","red","pink","blue"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    if(level==0){
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("gflash");
    setTimeout(function(){
        btn.classList.remove("gflash");
    },275);
}

function userFlash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
        btn.classList.remove("uflash");
    },275);
} 

function checkAns(idx){
    // console.log("curr level :", level);
    if(userSequence[idx]==gameSequence[idx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelup,700);
        }
    }
    else{
        h2.innerHTML=`GAME OVER ! Your score = <b>${level}</b> <br> Press any key to play again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();

    }
}
function levelup(){
    userSequence=[];
    level++;
    h2.innerText=`level ${level}`;

    let rand_index=Math.floor(Math.random()*3);
    let randColor=btns[rand_index];
    console.log(randColor);
    let randomButton=document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    gameFlash(randomButton);
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSequence.push(userColor);

    checkAns(userSequence.length -1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    console.log(btn);
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSequence=[];
    userSequence=[];
}
