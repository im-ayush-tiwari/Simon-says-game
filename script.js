let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "blue", "green"]

let start = false;
let level = 0;
let highest = 0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(event){
    
    if( event.code == "Enter" &&start == false)
    {
        start = true;
        levelUp();
    }
});

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
}

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq= [];
    level++;
    
    h2.innerText= `Level ${level}`;
    
    if(highest != 0){
        h2.innerHTML= `Level ${level}  &nbsp;||&nbsp; Highest '${highest}'`;
    }

    let randx = Math.floor(Math.random()*4);
    let randcol = btns[randx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameSeq.push(randcol);
    gameFlash(randbtn);
    console.log(gameSeq);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
}

function check(idx){

    if(userSeq[idx] == gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your score was '${level}'<br>Press Enter to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        if(highest < level){
            high();}
        reset();

    }
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function high(){
    highest = level;
}