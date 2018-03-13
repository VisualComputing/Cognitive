/**
*  Checkerboard Bulge illusion
*  Author: Luis Ernesto Gil Castellanos
*  March 2018
*  More info at: http://www.ritsumei.ac.jp/~akitaoka/index-e.html
**/ 

var tileSize;
var customizable;
var matrix;

var bulgeSketch = function( p ) {
  p.setup = function( ) {
    p.createCanvas( 600, 600 );
    // For the 11x11 matrix, this is the side of a single tile
    tileSize = 40; 
    // Whether or not the small squares are drawn
    customizable = true;
    // 
    /**
    *  The style matrix, this determines where goes the small squares
    *  and it orientation
    **/
    matrix = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 5, 2, 2, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 1, 1, 5, 2, 2, 2, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 1, 1, 5, 2, 2, 2, 2, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 5, 2, 2, 2, 2, 2, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 5, 2, 2, 2, 2, 2, 2, 0,
      0, 6, 6, 6, 6, 6, 6, 0, 4, 4, 4, 4, 4, 4, 0,
      0, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 0, 0,
      0, 0, 0, 2, 2, 2, 2, 3, 1, 1, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 2, 2, 2, 3, 1, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 2, 2, 3, 1, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 2, 3, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
  }

  p.draw = function( ) {
    // Starts the checkerboard with white color
    var white = true;
    // Used to read the style matrix
    var index = 0;
    for( var i = 0; i < p.width; i += tileSize ) {
      for( var j = 0; j < p.height; j += tileSize ) {
        // tile at matrix[ index ] is not decorated with small squares
        if( matrix[ index ] == 0 )
        {
          drawSingleTile( white, false, i, j, 0, tileSize );
        }
        // tile at matrix[ index ] has a style stored at that position
        else
        {
          drawSingleTile( white, customizable, i, j, matrix[ index ], tileSize );
        }
        // Next tile will be the opposite color ( at the first loop this becomes false, 
        // therefore the tile is black)
        white = !white;
        // Next position at style matrix
        index++;
      }
    }  
  }

  // When click is pressed, all the small squares dissapear
  p.mousePressed = function( ) {
    customizable = false;
  }

  // When click is released, the small squares are drawn again.
  p.mouseReleased = function( ) {
    customizable = true;
  }

  /**
  *    Types:
  *    1 - +---+  2 - +---+  3 - +---+  4 - +---+  5 - +---+  6 - +---+ 
  *        |  *|      |*  |      |* *|      |*  |      |   |      |  *|          
  *        |*  |      |  *|      |   |      |*  |      |* *|      |  *| 
  *        +---+      +---+      +---+      +---+      +---+      +---+
  **/
  /**
   * @param  {isWhite} is the current tile white or not
   * @param  {customizable} the current tile will be decorated with smalll squares or not
   * @param  {row} row number at the matrix
   * @param  {col} column number at the matrix
   * @param  {type} style of the tile, listed above
   * @param  {tileSize} size of the tile
   */
  drawSingleTile = function( isWhite, customizable, row, col, type, tileSize ) {
    // Color of this tile
    var tileColor = bgColor( isWhite ); 
    // Draws the tile
    p.rectMode( p.CORNER );
    p.fill( tileColor );
    p.rect( col, row, tileSize, tileSize );
    // If the tile will be decorated with small squares
    if( customizable ) {
      // Size of the small squares
      var miniSize = 10;
      // Coordinates of the small squares
      var coords = getMiniCoords( row, col, type );
      // Setting the color of the small squares and positioning both of them at coordinates
      p.push( );    
      var miniTile = bgColor( !isWhite );
      p.fill( miniTile );
      p.rectMode( p.CENTER );
      p.rect( coords[ 0 ], coords[ 1 ], miniSize, miniSize );
      p.rect( coords[ 2 ], coords[ 3 ], miniSize, miniSize );
      p.pop( );     
    }
  }

  /**
   * @param  {row} row number at the matrix
   * @param  {col} column number at the matrix
   * @param  {type} style of the tile, listed above
   */
  getMiniCoords = function( row, col, type ) {
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
      switch ( type ){
        case 1:
          x1 = col + ( tileSize * 80 / 100 );
          y1 = row + ( tileSize * 20 / 100 );
          x2 = col + ( tileSize * 20 / 100 );
          y2 = row +( tileSize * 80 / 100 );
          break;
        case 2:
          x1 = col + ( tileSize * 20 / 100 );
          y1 = row + ( tileSize * 20 / 100 );
          x2 = col + ( tileSize * 80 / 100 );
          y2 = row + ( tileSize * 80 / 100 );
          break;
        case 3:
          x1 = col + ( tileSize * 20 / 100 );
          y1 = row + ( tileSize * 20 / 100 );
          x2 = col + ( tileSize * 80 / 100 );
          y2 = row + ( tileSize * 20 / 100 );
          break;
        case 4:
          x1 = col + ( tileSize * 20 / 100 );
          y1 = row + ( tileSize * 20 / 100 );
          x2 = col + ( tileSize * 20 / 100 );
          y2 = row + ( tileSize * 80 / 100 );
          break;      
        case 5:
          x1 = col + ( tileSize * 20 / 100 );
          y1 = row + ( tileSize * 80 / 100 );
          x2 = col + ( tileSize * 80 / 100 );
          y2 = row + ( tileSize * 80 / 100 );
          break;
        case 6:
          x1 = col + ( tileSize * 80 / 100 );
          y1 = row + ( tileSize * 20 / 100 );
          x2 = col + ( tileSize * 80 / 100 );
          y2 = row + ( tileSize * 80 / 100 );
          break;
      }
      var coordinates = [ x1, y1, x2, y2 ];
      return coordinates;
  }

  /**
   * @param  {isWhite} is the color of the tile white or black
   * @return {color} white(255) or black(0)
   */
  bgColor = function( isWhite ) {
    return ( isWhite ) ? p.color( 255 ) : p.color( 0 );
  }

}

new p5( bulgeSketch, 'checker_bulge_id' );

  

  
  