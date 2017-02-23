var d = 20;
var x = [50,250];
var y = [70,170,270];
var sketch2 = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(320, 360);
        myCanvas.parent( 'MullerLyer_id' );
        p.background(255);
    };

    p.draw = function() {
        p.background(255);
        p.stroke(0);
        p.strokeWeight(4);
        //Horizontal lines
        for(var i = 0; i < y.length; i++) {
          p.line( x[0],y[i], x[1],y[i] ); 
        }
        //Top line
        p.line( x[0], y[0], x[0]+d, y[0]+d );
        p.line( x[0], y[0], x[0]+d, y[0]-d );
        p.line( x[1], y[0], x[1]-d, y[0]+d );
        p.line( x[1], y[0], x[1]-d, y[0]-d );
      
        //Medium line
        p.line( x[0], y[1], x[0]-d, y[1]+d );
        p.line( x[0], y[1], x[0]-d, y[1]-d );
        p.line( x[1], y[1], x[1]+d, y[1]+d );
        p.line( x[1], y[1], x[1]+d, y[1]-d );
          
        //Bottom line
        p.line( x[0], y[2], x[0]+d, y[2]+d );
        p.line( x[0], y[2], x[0]+d, y[2]-d );
        p.line( x[1], y[2], x[1]+d, y[2]+d );
        p.line( x[1], y[2], x[1]+d, y[2]-d );
      
        if (p.mouseIsPressed == true) {
          p.stroke(255,0,0);
          p.strokeWeight(2);
          p.line(x[0], y[0], x[0], y[2]);
          p.line(x[1], y[0], x[1], y[2]);
        } 
    };
}
var myp5_2 = new p5( sketch2, 'MullerLyer_id' );
