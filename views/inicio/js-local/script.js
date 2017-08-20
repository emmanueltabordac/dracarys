var juego = new Phaser.Game(1600, 650, Phaser.CANVAS, 'zonPrincipal');

var fondJuego;

var guerrero;

var obstaculo;

var estrella;

var teclas;

var saltar;

var puntos = 0;

var estadoPrincipal = {
	
	preload: function(){ //Se cargan los recursos que se van a utilizar en el juego
		juego.load.image('fondo', 'views/inicio/img/pantanoFondo.jpg');
		juego.load.image('obstaculo', 'views/inicio/img/obstaculo.jpg');
		juego.load.spritesheet('estrella', 'views/inicio/img/coin.png', 115, 200);
		juego.load.spritesheet('guerreros', 'views/inicio/img/guerrero2.png', 184, 369);
	},
	
	create: function(){ //Mostrar en pantalla
		
		fondoJuego = juego.add.tileSprite(0, 0, 1600, 650, 'fondo');
		
		obstaculo = juego.add.sprite(600, 700, 'obstaculo');
		
		estrella = juego.add.sprite(1000, 200, 'estrella');
		estrella.frame=1;
		estrella.animations.add('monedas', [0,1,2,3,4,5], 3, true);
		
		guerrero = juego.add.sprite(0, 200, 'guerreros');
		guerrero.frame=1;
		guerrero.animations.add('caminar', [0,1,2,3,4,5,6], 5, true);
		
		teclas = juego.input.keyboard.createCursorKeys();
		saltar = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		juego.physics.enable(obstaculo, Phaser.Physics.ARCADE);
		obstaculo.body.collideWorldBounds = true;
		obstaculo.body.checkCollision.up = true;
		obstaculo.body.checkCollision.down = true;
		obstaculo.body.immovable = false;
		
		juego.physics.enable(estrella, Phaser.Physics.ARCADE);
		
		juego.physics.enable(guerrero, Phaser.Physics.ARCADE);
		guerrero.body.collideWorldBounds = true;
		guerrero.body.bounce.setTo(1, 1);
		guerrero.body.bounce.y = 0.3;
		guerrero.body.gravity.y = 500;
		
		//guerrero.body.velocity.x = -200;
		
	},
	
	update: function(){ //Animamos el juego
		
		fondoJuego.tilePosition.x -= 1;
		
		guerrero.animations.play('caminar');
		
		estrella.animations.play('monedas');
		
		if(teclas.right.isDown){
			
			guerrero.body.x +=5;
			
			if(juego.physics.arcade.collide(obstaculo, guerrero)){
				fondoJuego.tilePosition.x += 1 ;
				guerrero.animations.play('caminar');
			}else{
				fondoJuego.tilePosition.x -= 3 ;
			}
			
		}else if (teclas.left.isDown){
			
			guerrero.body.x-=5;
			
			if(juego.physics.arcade.collide(obstaculo, guerrero)){
				fondoJuego.tilePosition.x += 1 ;
				guerrero.animations.play('caminar');
			}else{
				fondoJuego.tilePosition.x += 5;
			}
			
		}else if(teclas.up.isDown){
			guerrero.body.y -=5;
			fondoJuego.tilePosition.x += 1;
		}else if (teclas.down.isDown){
			fondoJuego.tilePosition.x += 1;
			guerrero.body.y +=5;
		}else if(saltar.isDown){
			fondoJuego.tilePosition.x += 1;
			
			if (guerrero.body.onFloor()) {
				guerrero.body.y -=200;
				guerrero.body.x +=10;
				guerrero.animations.stop('caminar');
			}
			
		}else{
			
			gyro.frequency = 10;
			// start gyroscope detection
	          gyro.startTracking(function(o) {
	               // updating player velocity
	        	  guerrero.body.velocity.x += o.gamma/20;
	        	  guerrero.body.velocity.y += o.beta/20;
	          });		
	          
			fondoJuego.tilePosition.x += 1;
			guerrero.animations.stop('caminar');
		}
		
		
		console.log(fondoJuego.tilePosition.x);
		
		juego.physics.arcade.collide(obstaculo, guerrero);
		
		juego.physics.arcade.overlap(estrella, guerrero, collisionHandler, null, this);

	},
	
	render: function(){ 
		juego.debug.text('puntos ' + puntos , guerrero.x + 60, 64);
	}
	
};

function collisionHandler (estrella, guerrero) {
	puntos++;
	estrella.kill();
}

juego.state.add('script', estadoPrincipal);
juego.state.start('script');

