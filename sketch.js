
var database;
var gameState=0;
var form,game,player,playerCount;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getstate();
    game.start();

}

function draw(){

    //background("white");
     
}

