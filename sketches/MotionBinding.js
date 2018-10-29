var sketch5 = function( p ) {
  
var d = 50.0*(1.4142135623730950488016887242097);
var delta = 15;
var lx = [400+delta, 500+delta, 300-d+delta, 400-d+delta, 300-d/2.0, 400-d/2.0, 400+d/2.0, 500+d/2.0];
var ly = [2.0*d-delta, 100+2.0*d-delta, 100+3.0*d-delta, 200+3.0*d-delta, 100+(3.0*d/2.0), (3.0*d/2.0), 200+(5.0*d/2.0), 100+(5.0*d/2.0)];
var limits = [ [400+delta, 400+d-delta ], [300-d+delta, 300-delta] ];
var speed = [ (d-delta)/45.0, -(d-delta)/45.0 ];

    p.setup = function() {
      var myCanvas = p.createCanvas(800, 500);
      myCanvas.parent( 'MotionBinding_id' );
      p.background(127);
    };

    p.draw = function() {
      p.background(127);
      p.stroke(0,0,255);
      p.strokeCap('SQUARE');
      p.strokeWeight(6);
      makeLinesTypeOne( );
      makeLinesTypeTwo(  );
      if( p.mouseIsPressed ) {
        makeRectangles(  );
      }
    };

    function makeLinesTypeOne( ) {
      for(var i = 0; i < 2; i++) { 
        p.line( lx[2*i], ly[2*i], lx[2*i+1], ly[2*i+1] );
        lx[2*i] += speed[0];
        lx[2*i+1] += speed[0];
        ly[2*i] -= speed[0];
        ly[2*i+1] -= speed[0];
      }
      if( lx[0] < limits[0][0] || lx[0] > limits[0][1] ) speed[0] *= (-1.0); 
    }

    function makeLinesTypeTwo( ) {
      for(var i = 2; i < 4; i++) {
        p.line( lx[2*i], ly[2*i], lx[2*i+1], ly[2*i+1] );
        lx[2*i] += speed[1];
        lx[2*i+1] += speed[1];
        ly[2*i] += speed[1];
        ly[2*i+1] += speed[1];
      }
      if( lx[4] < limits[1][0] || lx[4] > limits[1][1] ) speed[1] *= (-1.0);
    }

    function makeRectangles( ) {
      p.noStroke();
      p.fill(0,255,0);
      var cx = [400,500+d,400,300-d];
      var cy = [0,100+d,200+2.0*d,100+d];
      for(var i = 0; i < 4; i++) {
        p.beginShape();
        p.vertex( cx[i], cy[i] );
        p.vertex( cx[i]+d, cy[i]+d );
        p.vertex( cx[i], cy[i]+2.0*d );
        p.vertex( cx[i]-d, cy[i]+d );
        p.endShape();  
      }
    }

};
var myp5_2 = new p5( sketch5, 'MotionBinding_id' );


