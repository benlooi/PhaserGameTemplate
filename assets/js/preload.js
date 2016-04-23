//the name of your state or scene object. It will have up to 3 properties: preload, create and update. I don't know what render is for. 
var PRELOAD = {
	
	preload: function () {

		game.load.audio('explosion_sound','assets/audio/explosion_sound.mp3');

		game.load.image('space','assets/images/space%20bg.png');
		//game.load.spritesheet('hero','assets/images/spritesheet1.png',32,48);
	},

	create: function () {

		game.state.start('splash');
	}
}

