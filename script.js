let CurrentShin;//this will help us track which pipe have current mole/shin 
let CurrentMOM;
let score =0;
let gameOver = false;


window.onload=function(){
    setGame();
}
function setGame(){
    //set up the grid for the game board in html
    for(let i=0;   i<9;   i++){
        
    let tile=document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click",selectTile);
   document.getElementById("board").appendChild(tile);
}

 setInterval(setShin,1000);
 setInterval(setMOM,2000);
}
function getRandomTile(){
    let num = Math.floor(Math.random()* 9);
    return num.toString();
}
function setShin(){
    if (gameOver) {
        return;
    }
 if(CurrentShin){
    CurrentShin.innerHTML="";
 }

    let shin=document.createElement("img");
    shin.src ="shinchan.png";

    //now to place the shinchan on any tile to do that

    let num=getRandomTile();
    if(CurrentMOM && CurrentMOM.id == num){
        return;
    }
    CurrentShin = document.getElementById(num);
    CurrentShin.appendChild(shin);
}
function setMOM(){
    if (gameOver) {
        return;
    }
    if(CurrentMOM){
       CurrentMOM.innerHTML="";
    }
   
       let MOM=document.createElement("img");
       MOM.src ="mixsy.png";
   
       //now to place the shinchan on any tile to do that
   
       let num=getRandomTile();
       //so that they dont overlap
       if (CurrentShin && CurrentShin.id == num) {
        return;
        
       }
       CurrentMOM = document.getElementById(num);
       CurrentMOM.appendChild(MOM);
   }
function selectTile(){
    if (gameOver) {
        return;
    }
    if (this == CurrentShin) {
        score +=10;
    document.getElementById("score").innerText=score.toString();
     }
     else if(this == CurrentMOM){
        document.getElementById("score").innerText="GAME OVER" + score.toString();
        gameOver=true;
    }
}