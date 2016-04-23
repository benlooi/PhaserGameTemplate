var game=new Phaser.Game(800,600,Phaser.AUTO,'');

//add various key states
//preload assets such as sprite images, audio

//game.state.add takes in 2 parameters. The first is the name of the state, and the second is the state object name.
//you need to put this file at the end of the other scripts that you include in the head of your index.html, or else it won't work. BEcause the browser will try to find the 
// other states before you try to load them.
game.state.add('preload',PRELOAD);
//opening scene - branding splash screen. You can add a few if you want
game.state.add('splash',SPLASH);
//menu scene or instructions scene
game.state.add('menu',MENU);
//level 1
game.state.add('level1',Level1);
//game over scene
//game.state.add('gameover',GameOver);


//ready? Let's start loading the states!
game.state.start('preload');
