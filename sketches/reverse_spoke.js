//Author: Alvaro Rodriguez
//March 4th 2017

//Implementado desde 0
var c = 0;
var sketch6 = function( p ){
	p.setup = function(){
		var myCanvas = p.createCanvas(700, 400);
		p.background(191,191,191);
		p.frameRate(50);
	};

	p.draw = function(){
	
		p.stroke(0);

		

	 	p.ellipse(350,200, 350,350);
	 	p.fill(0);
		p.ellipse(350,200, 10,10);
	  

	  	var q = c;

  		for(var i = 0; i <= 2*p.PI; i += p.QUARTER_PI/2){
	        p.fill(q);
	        p.stroke(127,127,127);
	        p.strokeWeight(3);
	        p.arc(350,200, 350, 350, i, i+p.QUARTER_PI/2, p.PIE);
	        q+=15;
	    //}
	        q = q%255;
  		}
		 
	  if(!p.mouseIsPressed){

	  	p.ellipse(350,200, 350,350);
	 	p.fill(0);
		p.ellipse(350,200, 10,10);
		p.noFill();

		for(var i = 0; i <= 2*p.PI; i += p.QUARTER_PI/2){
	        p.fill(c);
	        p.stroke(127,127,127);
	        p.strokeWeight(3);
	        p.arc(350,200, 350, 350, i, i+p.QUARTER_PI/2, p.PIE);
	        c+=15;
	    //}
	        c = c%255;
  		}

	  }
	};

}

var myp5_6 = new p5(sketch6, 'reverse_spoke_illusion_id');