class game {

constructor(){

}

getState(){

var gamestateref = database.ref('gamestate');
gamestateref.on("value",function(data){

gamestate = data.val();

});

}

update(state){

database.ref('/').update({

gamestate : state

})

}

start(){

if(gamestate == 0){

player1 = new player();
player1.getCount();
form1 = new form ();
form1.display();

}

}
async start(){

if(gamestate == 0){

player1 = new player();
var playercountref = await database.ref('playercount').once("value");
if(playercountref.exists()){

playercount = playercountref.val();
player1.getCount();

}

form1 = new form();
form1.display();

}

}

play(){

form1.hide();
textSize(30);
text("GAME START",120,100);
player.getplayerinfo();
if(allplayers !== undefined){

var displaypos = 130;
for(var plr in allplayers){

if(plr == "player"+player1.index)
fill ("red");
else
fill("black");


displaypos+= 20; 
textSize(15);
text(allplayers[plr].name+":"+allplayers[plr].distance,120,displaypos);
    
}

}

if(keyIsDown(UP_ARROW) && player1.index!==null){

player1.distance+=50;
player1.update();

}

}

}