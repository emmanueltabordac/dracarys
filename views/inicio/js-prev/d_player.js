var playerGame = function(game){
	
	var speedMult = 0;
	var friction = 0;
	var players = 0;
	var playerSelect = 0
	
};

playerGame.prototype = {
		
     preload: function(){
    	 
    	  speedMult = 0.7
    	  players = 4;
    	  friction = 0.99
    	  
          this.game.load.image("player0", "views/inicio/img/casla_select.png");
          this.game.load.image("player1", "views/inicio/img/adara_select.png");
          this.game.load.image("player2", "views/inicio/img/jon_select.png");
          this.game.load.image("player3", "views/inicio/img/dorian_select.png");
          this.game.load.image("fondo", "views/inicio/img/pantanoFondo.jpg");
          this.game.load.image("transp", "views/inicio/img/transp.png");
          this.game.load.image("button", "views/inicio/img/play_button.png");

     },
     create: function(){  
    	  
          this.game.stage.backgroundColor = "#000044"; 
          this.game.add.text(this.game.width / 2, 50, "Seleccione el Jugador", {font: "18px Arial", fill: "#ffffff"}).anchor.set(0.5);
          this.game.add.tileSprite(0, 0, this.game.width / 2 + players * 90 + 64, this.game.height, "fondo");
          this.scrollingMap = this.game.add.tileSprite(0, 0, this.game.width / 2 + players * 90 + 64, this.game.height, "transp");
          this.scrollingMap.inputEnabled = true;
          this.scrollingMap.input.enableDrag(false);
          this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
          this.scrollingMap.isBeingDragged = false; 
          this.scrollingMap.movingSpeed = 0; 
          this.scrollingMap.input.allowVerticalDrag = false;
          this.scrollingMap.input.boundsRect = new Phaser.Rectangle(this.game.width - this.scrollingMap.width, this.game.height - this.scrollingMap.height, this.scrollingMap.width * 2 - this.game.width, this.scrollingMap.height * 2 - this.game.height);
          for(var i = 0; i < players; i++){
        	  var playerImage = this.game.add.image(this.game.width / 2 + i * 90, this.game.height / 2, "player" + i);
        	  playerImage.anchor.setTo(0.5,0.5);
              this.scrollingMap.addChild(playerImage);
          }
          this.scrollingMap.events.onDragStart.add(function(){
               this.scrollingMap.isBeingDragged = true;
               this.scrollingMap.movingSpeed = 0;
          }, this);
          this.scrollingMap.events.onDragStop.add(function(){
               this.scrollingMap.isBeingDragged = false;
          }, this);
          this.game.add.button(60, 400,"button",this.playTheGame,this);
     },
     update:function(){
          var zoomed = false;
          for(var i = 0; i < this.scrollingMap.children.length; i++){
               if(Math.abs(this.scrollingMap.children[i].world.x - this.game.width / 2) < 46 && !zoomed){
                    this.scrollingMap.getChildAt(i).scale.setTo(1.5);
                    zoomed = true;
                    playerSelect = i;
               }
               else{
                    this.scrollingMap.getChildAt(i).scale.setTo(1);   
               }
          }
          if(this.scrollingMap.isBeingDragged){
               this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
          }
          else{
               if(this.scrollingMap.movingSpeed > 1){
                    this.scrollingMap.x += this.scrollingMap.movingSpeed * Math.cos(this.scrollingMap.movingangle);
                    if(this.scrollingMap.x < this.game.width - this.scrollingMap.width){
                         this.scrollingMap.x = this.game.width - this.scrollingMap.width;
                         this.scrollingMap.movingSpeed *= 0.5;
                         this.scrollingMap.movingangle += Math.PI;
                         
                    }
                    if(this.scrollingMap.x > 0){
                         this.scrollingMap.x = 0;
                         this.scrollingMap.movingSpeed *= 0.5;
                         this.scrollingMap.movingangle += Math.PI;
                    }
                    this.scrollingMap.movingSpeed *= friction;
                    this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
               }
               else{
                    var distance = this.scrollingMap.savedPosition.distance(this.scrollingMap.position);
                    var angle = this.scrollingMap.savedPosition.angle(this.scrollingMap.position);
                    if(distance > 4){
                         this.scrollingMap.movingSpeed = distance * speedMult;
                         this.scrollingMap.movingangle = angle;
                    }
               }
          }
     }, 
     
     playTheGame: function(){
 		this.game.state.start("TheGame", true,false, playerSelect);
 	}
}