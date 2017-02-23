var rx = 100;
var rspeed = 1.00;

var sketch6 = function( p ) {
    p.setup = function() {
      var myCanvas = p.createCanvas(800, 600);
      myCanvas.parent( 'Anstis_id' );
      p.background(255);
    };

    p.draw = function() {
      p.background(255);
      p.noFill();
      p.strokeWeight(5);
      p.stroke(0);
      p.rect( 100, 100, 600, 400 );
      if( !p.mouseIsPressed )
        makeBars();
      moveRect();
    };

    function moveRect() {
      p.noStroke();
      p.fill(255,255,0);
      p.rect( rx,220, 60,30 );
      p.fill(0,0,102);
      p.rect( rx,320, 60,30 );
      rx += rspeed;
      if( rx+60 >= 700 || rx <= 100 ) rspeed *= (-1.0);
    }

    function makeBars() {
      p.strokeCap('SQUARE');
      p.strokeWeight(15);
      for(var i = 0; i < 20; i++) 
        p.line(110+i*30,495,110+i*30,105);
    }

};
var myp5_6 = new p5( sketch6, 'Anstis_id' );

