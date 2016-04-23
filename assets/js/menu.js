var button;
var grd;
var text;

var MENU = {
	create: function (){

		button = game.add.graphics(game.world.centerX-100,game.world.centerY);

		button.beginFill(0x332222);
		button.drawRoundedRect(0,0,200,50,10);
		button.endFill();

		text= game.add.text(game.world.centerX-50,game.world.centerY,"START");
		//text.anchor.setTo(0.5,0.55);
		text.fill='white';
		text.font="Arial";
		text.fontSize=40;

		button.inputEnabled=true;
		button.input.useHandCursor = true;
		button.events.onInputOver.add(over, this);
		button.events.onInputOut.add(out, this);
		button.events.onInputDown.add(goStart, this);
	}
}

function over () {

	button.beginFill(0xff0000);
		button.drawRoundedRect(0,0,200,50,10);
		button.endFill();
}

function out () {
button.beginFill(0x332222);
		button.drawRoundedRect(0,0,200,50,10);
		button.endFill();

}

function goStart () {
	game.state.start('level1');
}