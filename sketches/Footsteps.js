/**
*  Stuart Anstis Lab: Footsteps illusion
*  Author: Luis Ernesto Gil Castellanos
*  More info: http://anstislab.ucsd.edu/2012/11/19/footsteps/
*  March 2018
**/
var blackStripes;
var stripeCount;
var xPosition;
var footWidth;
var footHeight;
var footSeparation;

var footSketch = function( p ) {
  p.setup = function( ) {
    p.createCanvas( 500, 500 );
    // The stripes that will be colored have this color (black)
    blackStripes = p.color( 0 );
    // Number of colored stripes
    stripeCount = 20;
    // Used for feet movement
    xPosition = 0;
    // Foot dimensions
    footWidth = 80;
    footHeight = 40;
    // Separation between the middle of the canvas and each foot
    footSeparation = 60;
  }

  p.draw = function( ) {
    drawStripes( );
    drawFeet( );
    drawMarkers( );
  }

  drawStripes = function( ) {
    p.noStroke( );
    // Filling rectangles interspersed
    var filled = true;
    // 'stripeCount * 2' because there is 'stripeCount' black stripes 
    // and 'stripeCount' white stripes.
    var stripeWidth = p.width / ( stripeCount * 2 );
    for( var i = 0; i < p.width; i += stripeWidth ) {
    // Is filled with color or not
      var c = (( filled ) ? blackStripes : p.color( 255 ));    
      filled = !filled;
      p.fill( c );
      p.rect( i, 0, stripeWidth, p.height );
    }    
  }

  drawFeet = function( ) {
    // Blue foot placed at top
    p.fill( p.color( 50, 55, 100 ) );
    p.rect( xPosition, p.height / 2 - footSeparation, footWidth, footHeight );
    // Yellow foot placed at bottom
    p.fill( p.color( 255, 204, 0 ) );
    p.rect( xPosition, p.height / 2 + footSeparation, footWidth, footHeight );
    // Move feet pixel by pixel
    xPosition = ( ( xPosition < p.width ) ? xPosition + 6 : 0 );
  }

  drawMarkers = function( ) {
    // Red point at top of the canvas
    p.fill( p.color( 255, 0 ,0 ) );
    p.ellipse( p.width / 2 , 60, 5, 5 );
    // When the mouse is pressed, a red rule is painted
    // to show that feet are moving at the same speed.
    if( p.mouseIsPressed ) {
      p.stroke( p.color( 255, 0, 0 ) );
    }
    else {
      p.noStroke();
    }
    // Draws a red line, connecting both feet
    p.line( xPosition + ( footWidth / 2 ), p.height / 2 - ( footSeparation - footHeight ), xPosition + ( footWidth / 2 ), p.height / 2 + footSeparation);
  }

  // When click is pressed, changes the striped background to all white.
  p.mousePressed = function( ) {
    blackStripes = p.color( 255 );
  }
  // When click is released, the background is restored
  p.mouseReleased = function( ) {
    blackStripes = p.color( 0 );
  }
}

new p5( footSketch, 'footsteps_id' );