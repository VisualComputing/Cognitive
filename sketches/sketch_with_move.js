var sketchBreathing = function( p ) {
	var canvas, squarewidth, canvasWidth, canvasHeight, angle, a, b, c;
    p.setup = function() {
		canvasWidth = 350;
		canvasHeight = 350;
		canvas = p.createCanvas(canvasWidth, canvasWidth);
		canvas.parent('breathing_id');
		//Stroke properties
		p.noStroke();
		p.smooth();

		//Initialization
		div = p.createDiv('<br><h5>Breathing Square</h5><br>Move the slider to change squares size');
		div.id("sliders");
		div.parent('breathing_id')

		squarewidth_slider = p.createSlider(0, 175, 150);
		squarewidth_slider.position(400, 600);
		squarewidth_slider.parent("sliders")

		a = Math.floor((Math.random() * 255) + 0);
		b = Math.floor((Math.random() * 255) + 0);
		c = Math.floor((Math.random() * 255) + 0);    
    };

    p.draw = function() {
        canvas.background(210);
		var squarewidth = squarewidth_slider.value()
		//fill with random color
		p.fill(a, b, c);

		p.push()
		//fill with inverse color
		p.fill(255-a, 255-b, 255-c);
		//Translate the rotation to the center of the canvas
		p.translate(canvasWidth/2, canvasHeight/2);
		p.rotate(p.frameCount / 30.0);
		//Translate the square to the center
		p.translate(-125,-125);
		p.rect(0, 0, 250, 250);
		p.pop()

		//Draw the 4 squares
		p.rect(0, 0, squarewidth, squarewidth);
		p.rect(canvasWidth-squarewidth, 0, squarewidth, squarewidth);
		p.rect(0, canvasHeight-squarewidth, squarewidth, squarewidth);
		p.rect(canvasWidth-squarewidth, canvasHeight-squarewidth, squarewidth, squarewidth);
  };
};

var sketchStepping = function( p ) {
	var canvas, canvasWidth, canvasHeight;
	var a=80;
	var b=40;
	var s=0;

	p.setup = function() {
		canvasWidth = 800;
		canvasHeight = 320;
		canvas = p.createCanvas(canvasWidth, canvasHeight);
		canvas.parent('stepping_id');
		div = p.createDiv('<br><h5>Stepping feet</h5>');
		div.parent('stepping_id')
	};

	p.draw = function(){
		p.background(255);
		if (b>=p.height-a/2) {
			s=1;
		}
		if (b==a/2) {
			s=0;
		}
		if (s==0) {
			b++;
		}else {
			b--;
		}
		//Stripes
		p.rectMode(p.CORNER);
		p.noStroke();
		p.fill(0);
		if(p.mouseIsPressed == false) {
	  		for (var y=0; y<300; y=y+40) {
				p.rect(0, y, 800, 20);
			}	
		}
		//Squares
		p.rectMode(p.CENTER);
		p.fill(0, 0, 30);
		p.rect(320, b, a, a);
		p.rect(640, b, a, a);
		p.fill(255, 255, 0);
		p.rect(160, b, a, a);
		p.rect(480, b, a, a);
	};
};

var myp5_1 = new p5(sketchBreathing);
var myp5_2 = new p5(sketchStepping);