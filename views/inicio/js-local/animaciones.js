/*var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create});

function preload() {

    //  Texture Atlas Method 2
    //
    //  In this example we assume that the TexturePacker JSON data is a real json object stored as a var
    //  (in this case botData)

    game.stage.backgroundColor = "#4488AA";

    game.load.atlas('adara_p1', 'views/inicio/img/jon.png', null, adara_p1);
    game.load.atlas('adara_p2', 'views/inicio/img/jon.png', null, adara_p2);
    game.load.atlas('adara_p3', 'views/inicio/img/jon.png', null, adara_p3);
    game.load.atlas('adara_p4', 'views/inicio/img/jon.png', null, adara_p4);
    game.load.atlas('adara_p5', 'views/inicio/img/jon.png', null, adara_p5);
    game.load.atlas('adara_p6', 'views/inicio/img/jon.png', null, adara_p6);
    game.load.atlas('adara_p7', 'views/inicio/img/jon.png', null, adara_p7);
    game.load.atlas('adara_p8', 'views/inicio/img/jon.png', null, adara_p8);
    game.load.atlas('adara_p9', 'views/inicio/img/jon.png', null, adara_p9);
    game.load.atlas('adara_p10', 'views/inicio/img/jon.png', null, adara_p10);
    game.load.atlas('adara_p11', 'views/inicio/img/jon.png', null, adara_p11);
    game.load.atlas('adara_p12', 'views/inicio/img/jon.png', null, adara_p12);
    game.load.atlas('adara_p13', 'views/inicio/img/jon.png', null, adara_p13);
    game.load.atlas('adara_p14', 'views/inicio/img/jon.png', null, adara_p14);
    game.load.atlas('adara_p15', 'views/inicio/img/jon.png', null, adara_p15);
    game.load.atlas('adara_p16', 'views/inicio/img/jon.png', null, adara_p16);
    game.load.atlas('adara_p17', 'views/inicio/img/jon.png', null, adara_p17);
    game.load.atlas('adara_p18', 'views/inicio/img/jon.png', null, adara_p18);
    game.load.atlas('adara_p19', 'views/inicio/img/jon.png', null, adara_p19);
    game.load.atlas('adara_p20', 'views/inicio/img/jon.png', null, adara_p20);
    game.load.atlas('adara_p21', 'views/inicio/img/jon.png', null, adara_p21);

}

var bot;
var bot2;
var bot3;
var bot4;
var bot5;
var bot6;
var bot7;
var bot8;
var bot9;
var bot10;
var bot11;
var bot12;
var bot13;
var bot14;
var bot15;
var bot16;
var bot17;
var bot18;
var bot19;
var bot20;
var bot21;

function create() {

    bot = game.add.sprite(game.world.centerX, 50, 'adara_p1');

    bot.animations.add('run');
    bot.animations.play('run', 8, true);
    
    bot2 = game.add.sprite(game.world.centerX, 200, 'adara_p2');

    bot2.animations.add('run');
    bot2.animations.play('run', 8, true);
    
    bot3 = game.add.sprite(game.world.centerX, 350, 'adara_p3');

    bot3.animations.add('run');
    bot3.animations.play('run', 8, true);
    
    bot4 = game.add.sprite(game.world.centerX, 500, 'adara_p4');

    bot4.animations.add('run');
    bot4.animations.play('run', 8, true);
    
    bot5 = game.add.sprite(game.world.centerX + 100, 500, 'adara_p5');

    bot5.animations.add('run');
    bot5.animations.play('run', 8, true);
    
    bot6 = game.add.sprite(game.world.centerX + 100, 350, 'adara_p6');

    bot6.animations.add('run');
    bot6.animations.play('run', 8, true);
    
    bot7 = game.add.sprite(game.world.centerX + 100, 200, 'adara_p7');

    bot7.animations.add('run');
    bot7.animations.play('run', 8, true);
    
    bot8 = game.add.sprite(game.world.centerX + 100, 50, 'adara_p8');

    bot8.animations.add('run');
    bot8.animations.play('run', 8, true);

    bot9 = game.add.sprite(game.world.centerX + 200, 50, 'adara_p9');

    bot9.animations.add('run');
    bot9.animations.play('run', 8, true);
    
    bot10 = game.add.sprite(game.world.centerX + 200, 200, 'adara_p10');

    bot10.animations.add('run');
    bot10.animations.play('run', 8, true);
    
    bot11 = game.add.sprite(game.world.centerX + 200, 350, 'adara_p11');

    bot11.animations.add('run');
    bot11.animations.play('run', 8, true);
    
    bot12 = game.add.sprite(game.world.centerX + 200, 500, 'adara_p12');

    bot12.animations.add('run');
    bot12.animations.play('run', 8, true);
    
    bot13 = game.add.sprite(game.world.centerX + 300, 500, 'adara_p13');

    bot13.animations.add('run');
    bot13.animations.play('run', 8, true);
    
    bot14 = game.add.sprite(game.world.centerX + 300, 50, 'adara_p14');

    bot14.animations.add('run');
    bot14.animations.play('run', 8, true);
    
    bot15 = game.add.sprite(game.world.centerX + 300, 200, 'adara_p15');

    bot15.animations.add('run');
    bot15.animations.play('run', 8, true);
    
    bot16 = game.add.sprite(game.world.centerX + 300, 350, 'adara_p16');

    bot16.animations.add('run');
    bot16.animations.play('run', 8, true);
    
    bot17 = game.add.sprite(game.world.centerX + 400, 500, 'adara_p17');

    bot17.animations.add('run');
    bot17.animations.play('run', 8, true);
    
    bot18 = game.add.sprite(game.world.centerX + 400, 350, 'adara_p18');

    bot18.animations.add('run');
    bot18.animations.play('run', 8, true);
    
    bot19 = game.add.sprite(game.world.centerX + 400, 200, 'adara_p19');

    bot19.animations.add('run');
    bot19.animations.play('run', 8, true);
    
    bot20 = game.add.sprite(game.world.centerX + 400, 50, 'adara_p20');

    bot20.animations.add('run');
    bot20.animations.play('run', 8, true);
    
    bot21 = game.add.sprite(game.world.centerX + 500, 50, 'adara_p21');

    bot21.animations.add('run');
    bot21.animations.play('run', 8, true);

}
*/
