WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Raleway','Bangers']
    }

};

var text;
var text2;
var grd;
var grd2;
var thunder;
var SPLASH= {

	preload: function () {

		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


	},
	create: function () {
		 //display it for 4 seconds, then fade , then load your menu state through startMenu function
		 game.stage.setBackgroundColor(0x222222);
		 thunder=game.add.audio('explosion_sound');
		 thunder.play();
	game.time.events.add(Phaser.Timer.SECOND * 4, startMenu, this);


	}
}

function createText () {
//create the text for your splash here.
	text = game.add.text(game.world.centerX, game.world.centerY,"CreativeSpectrum ");
	text.font="Bangers";
	text.fontSize=60;
	
	grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');
    text.fill = grd;
    text.anchor.setTo(0.5);

    text.align = 'center';
    text.stroke = '#000000';
    text.strokeThickness = 2;
    text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    text.alpha=0;
   game.add.tween(text).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);

	text2= game.add.text(game.world.centerX, game.world.centerY+80,"Studios ");
	text2.font="Raleway";
	text2.fontSize=60;
	text2.anchor.setTo(0.5);

	grd2= text.context.createLinearGradient(0, 0, 0, text.canvas.height);
    grd2.addColorStop(0, '#8ED6FF');   
    grd2.addColorStop(1, '#004CB3');
    text2.fill = grd2;

    text2.align = 'center';
    text2.stroke = '#000000';
    text2.strokeThickness = 2;
    text2.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    text2.alpha=0;
   game.add.tween(text2).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);

   


}

function startMenu () {
	   
     game.add.tween(text).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
     game.add.tween(text2).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);

game.time.events.add(2000, function () {game.state.start('menu');}, this);

}