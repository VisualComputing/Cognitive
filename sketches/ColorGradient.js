/**
*  Color gradient illusion
*  Author: Luis Ernesto Gil Castellanos
*  March 2018
**/

var startColor;
var endColor;
var rectColor;

var colorGradientSketch = function( p ) {
  p.setup = function( ) {
    p.createCanvas( 440, 320 );
    // Gradient goes from black to white
    startColor = p.color( 0 );
    endColor = p.color( 255 );
    //Gray color for the middle rectangle
    rectColor = p.color( 128 );
  }

  setGradientColor = function( startX, endX, startY, endY, c1, c2 ) {
    p.noFill();
    for ( var i = startX; i <= startX + endX; i++ ) {
      // scaling position 'i' on the canvas to [0, 1] range.
      var inter = p.map( i, startX, startX + endX, 0, 1 );
      // getting a color between 'c1' and 'c2' with 'inter' increment.
      var c = p.lerpColor( c1, c2, inter );
      // color of the line
      p.stroke( c );
      // draws single colored line making the gradient
      p.line( i, startY, i, startY + endY ); 
    }
  }

  p.draw = function( ) {
    // Set the bakground to gradient color from black to white
    setGradientColor( 0, p.width, 0, p.height, startColor, endColor );
    /**
    *   Calculates coordiates of width (80% of total width, centered) and 
    *   height (40 pixels height, centered) of the solid color rectangle.
    **/
    var rectStartX = p.width * 1/10;
    var rectEndX = p.width * 8/10;
    var rectStartY = p.height/2 - 20;
    var rectEndY = 40;
    // Drawing the rectangle, without gradient (e.g. startColor == endColor)
    setGradientColor( rectStartX , rectEndX, rectStartY, rectEndY, rectColor, rectColor );
  }

  //Changes the background to all black when click is pressed
  p.mousePressed = function( ) {
    endColor = p.color( 0 );
  }

  //Restores backgound gradient when click is released
  p.mouseReleased = function( ) {
    endColor = p.color( 255 );
  }
}

new p5( colorGradientSketch, 'color_gradient_id' );