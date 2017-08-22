var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");

game.state.add("playerGame", playerGame);
game.state.add("TheGame", theGame);
//game.state.add("GameOver", gameOver);
game.state.start("playerGame");