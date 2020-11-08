class form {

constructor(){

    this.input = createInput("NAME");

    this.button = createButton('PLAY');
    
    this.greeting = createElement('h3') 

}

hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();

}

display(){

var title = createElement('h2');
title.html("CAR RACING GAME");
title.position(130,0);

this.input.position(130,160);
this.button.position(250,200);

this.button.mousePressed(() => {

this.input.hide();
this.button.hide();

player1.name = this.input.value();

playercount+=1;
player1.index = playercount;

player1.update();
player1.updatecount(playercount);

this.greeting.html("HELLO"+player1.name);
this.greeting.position(130,160);

})

}

}