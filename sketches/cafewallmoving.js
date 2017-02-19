var sz = 25;
var gap = sz/4;
var strokeW = 1;
var rate = 1.0;
var firstColor = [ 1, 1, 1, 1 ];
var firstWeight = [ gap, 2*gap, 3*gap, 2*gap ];
var pauseY = 10;
var pauseX = 370;

function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('cafewallmoving_id');
	frameRate(10);
	//noLoop();
}

function draw() {
	background( 255 );
	stroke( 100 );
	strokeWeight( strokeW );
	var cnt = 0;
	for( var y = 0; y < 400; y += sz ){
		fill( 255 * firstColor[ cnt ] );
		rect( 0, y, firstWeight[ cnt ], sz );
		var curColor = (firstColor[ cnt ] + 1) % 2;
		for( var x = firstWeight[ cnt ]; x < 400; x += sz ){
			fill( 255 * curColor );
			rect( x, y, sz, sz );
			curColor = (curColor + 1) % 2;
		}
		cnt = (cnt + 1) % 4;
	}

	if( !overPause() ){
		if( firstWeight[ 0 ] >= sz ){
			firstColor[ 0 ] = (firstColor[ 0 ] + 1) % 2;
			firstWeight[ 0 ] = 1;
		}
		else firstWeight[ 0 ] += rate;

		if( firstWeight[ 2 ] <= 1 ){
			firstColor[ 2 ] = (firstColor[ 2 ] + 1) % 2;
			firstWeight[ 2 ] = sz;
		}
		else firstWeight[ 2 ] -= rate;
	}

	fill(200);
	rect(pauseX, pauseY, 20, 20);
	fill(80);
	rect(pauseX+6, pauseY+5, 2, 10);
	rect(pauseX+12, pauseY+5, 2, 10);
}

function overPause(){
  return mouseX >= pauseX && mouseX <= pauseX + 20 && mouseY >= pauseY && mouseY <= pauseY + 20;
}