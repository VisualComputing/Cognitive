var sketch3 = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(800, 600);
        myCanvas.parent( 'Ebbinghaus_id' );
        p.background(127);
    };

    p.draw = function() {
      p.background(127);
      p.noStroke();
      
      p.fill(225,128,0);
      p.ellipse( 250,350, 60, 60 );
      p.ellipse( 650,350, 60, 60 );
      
      if( !p.mouseIsPressed ) {
        p.fill(153,204,255);
        p.ellipse( 100,350, 135, 135 );
        p.ellipse( 177,470, 135, 135 );
        p.ellipse( 323,470, 135, 135 );
        p.ellipse( 400,350, 135, 135 );
        p.ellipse( 177,220, 135, 135 );
        p.ellipse( 323,220, 135, 135 );
        
        p.ellipse( 600,350, 25, 25 );
        p.ellipse( 615,385, 25, 25 );
        p.ellipse( 650,400, 25, 25 );
        p.ellipse( 685,385, 25, 25 );
        p.ellipse( 700,350, 25, 25 );
        p.ellipse( 685,315, 25, 25 );
        p.ellipse( 650,300, 25, 25 );
        p.ellipse( 615,315, 25, 25 );
      }
    };
}
var myp5_3 = new p5( sketch3, 'Ebbinghaus_id' );
