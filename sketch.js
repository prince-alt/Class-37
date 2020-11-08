var database,position;
var gamestate = 0;
var playercount,form1,game1,player1;
var allplayers;

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    game1 = new game();
    game1.getState();
    game1.start();
    

}

function draw(){

    background("white");

    if(playercount == 4){

 game1.update(1);

    }

    if(gamestate == 1){

clear();
game1.play()

    }
   
    drawSprites();
}

