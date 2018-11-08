var rx = 100;
var rspeed = 1.00;

var sketch6 = function( p ) {
    p.setup = function() {
      var myCanvas = p.createCanvas(600, 400);
      myCanvas.parent( 'Anstis_id' );
      p.background(255);
    };

    p.draw = function() {
      p.background(255);
      if( !p.mouseIsPressed )
        makeBars();
      moveRect();
    };

    function moveRect() {
      p.noStroke();
      p.fill(255,255,0);
      p.rect( rx,120, 60,30 );
      p.fill(0,0,102);
      p.rect( rx,220, 60,30 );
      rx += rspeed;
      if( rx+60 >= 600 || rx <= 10 ) rspeed *= (-1.0);
    }

    function makeBars() {
      p.strokeCap(p.SQUARE);
      p.strokeWeight(15);
      p.stroke(0);
      for(var i = 0; i < 20; i++) 
        p.line(10+i*30,495-100,10+i*30,5);
    }

};

p5Man.add(new p5( sketch6, 'Anstis_id' ));
