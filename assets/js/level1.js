var text;

var Level1 = {

	create: function () {

		console.log("hello");
		
		var background=game.add.sprite(0,0,'space');
		background.scale.setTo(0.2,0.3);

		text=game.add.text(game.world.centerX,game.world.centerY,"Your game here.");
		text.fill="white";
		text.font="Impact";
		text.fontSize="80";



	}
}