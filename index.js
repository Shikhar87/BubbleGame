var timer = 60;
var score=0;
var clickValue;
lives=3;
var timerInt;


function handleTimer(){
    timerInt=setInterval(function(){
        if(timer>0){
            --timer;
            document.querySelector("#timer").textContent=timer;
        }
        else{
        showPopup();
        }
    },1000)
    
}
function showPopup(){
    document.querySelector("#popup").style.display="flex";
}
function inceraseScore(){
    score +=10;
    document.querySelector("#scoreelem").textContent=score;
    
}
function getClickValue(){
    clickValue=Math.floor(Math.random()*10);
    document.querySelector("#click").textContent=clickValue;
}
function bubbleClickLogic(){
    document.querySelector("#bottom").addEventListener("click",function(dets){
        if(Number(dets.target.textContent)=== clickValue){
            inceraseScore();
            showBubbles();
            getClickValue();
        }
        else{
            lives--;
            document.querySelector("#Lives").textContent=lives;
            if(lives===0){
                clearInterval(timerInt);
                showPopup();
            }
            showBubbles();
            getClickValue();
        }
    });
}
function showBubbles(){
    var clutter="";
    for(var i=0;i<78;i++){
    var num=Math.floor(Math.random()*10);
    clutter +=
    ` <div id="bubble">${num}</div>
    `;  
}
document.querySelector("#bottom").innerHTML=clutter;

}
function removePOPup(){
    document.querySelector("#close").addEventListener("click",function(){
        document.querySelector("#popup").style.display="none";
        window.location.reload();
    })
}
removePOPup();
handleTimer();
bubbleClickLogic();
getClickValue();
showBubbles();