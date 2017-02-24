var sketch3 = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(800, 400);
        myCanvas.parent( 'Ebbinghaus_id' );
        p.background(127);
    };

    p.draw = function() {
      p.background(127);
      p.noStroke();
      
      p.fill(225,128,0);
      p.ellipse( 250,200, 60, 60 );
      p.ellipse( 650,200, 60, 60 );
      
      if( !p.mouseIsPressed ) {
        p.fill(153,204,255);
        p.ellipse( 100,200, 135, 135 );
        p.ellipse( 177,320, 135, 135 );
        p.ellipse( 323,320, 135, 135 );
        p.ellipse( 400,200, 135, 135 );
        p.ellipse( 177,70, 135, 135 );
        p.ellipse( 323,70, 135, 135 );
        
        p.ellipse( 600,200, 25, 25 );
        p.ellipse( 615,235, 25, 25 );
        p.ellipse( 650,250, 25, 25 );
        p.ellipse( 685,235, 25, 25 );
        p.ellipse( 700,200, 25, 25 );
        p.ellipse( 685,165, 25, 25 );
        p.ellipse( 650,150, 25, 25 );
        p.ellipse( 615,165, 25, 25 );
      }
    };
}
var myp5_3 = new p5( sketch3, 'Ebbinghaus_id' );
