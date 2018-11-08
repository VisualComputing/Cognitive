//Víctor Ramírez, Marzo 02, 2017
//Implementación desde cero

var sketch = function( p ){

    var lines = [//for alien figure
        [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 2, 2, 3, 2, 4, 1, 3, 0, 3, 1, 3, 0, 2, 3, 3],//x1
        [4, 3, 5, 0, 2, 5, 0, 1, 3, 6, 7, 1, 3, 7, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8],//y1
        [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 3, 3, 4, 3, 7, 2, 4, 1, 4, 2, 8, 1, 3, 5, 5],//x2
        [7, 4, 7, 1, 3, 7, 1, 2, 4, 7, 8, 2, 4, 8, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8],//y2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//is horizontal
        [1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1],//color (1)down or right or (-1)up or left  
    ];

    p.setup = function() {
        p.createCanvas( 350, 350 );
    };

    p.draw = function() {
        p.background( 255 );
        var pixelSz = 9;
        drawAlien( 50, 60, pixelSz, 0x78, 0xff, 0x02, 0x89, 0x02, 0xff, !mouseOver( 50, 60, pixelSz ));
        drawAlien( 50, 220, pixelSz, 0xff, 0x65, 0xd9, 0x47, 0xb5, 0x62, !mouseOver( 50, 220, pixelSz ) );
        drawAlien( 200, 60, pixelSz, 0xd9, 0xff, 0x03, 0x29, 0x03, 0xff, !mouseOver( 200, 60, pixelSz ) );
        drawAlien( 200, 220, pixelSz, 0x5f, 0xff, 0xf7, 0xb3, 0x42, 0x48, !mouseOver( 200, 220, pixelSz ) );
    };

    function mouseOver( x, y, pixelSz ){
        return p.mouseX >= x && p.mouseX <= x + 11*pixelSz && p.mouseY >= y && p.mouseY <= y + 8*pixelSz;
    };

    function drawAlien( x, y, pixelSz, r1, g1, b1, r2, g2, b2, useColor ){
        var lineSz = 2;
        p.strokeWeight( lineSz );
        if( useColor ){
            for( var i = 0; i < lines[0].length; i++ ){
                p.stroke( r1, g1, b1 );
                if( lines[4][i] == 0 ){
                    p.line( x + pixelSz*lines[0][i] + lineSz*lines[5][i], y + pixelSz*lines[1][i], x + pixelSz*lines[2][i] + lineSz*lines[5][i], y + pixelSz*lines[3][i]);
                    p.line( x + pixelSz*(11 - lines[0][i]) - lineSz*lines[5][i], y + pixelSz*lines[1][i], x + pixelSz*(11 - lines[2][i]) - lineSz*lines[5][i], y + pixelSz*lines[3][i] );
                }
                else{
                    p.line( x + pixelSz*lines[0][i], y + pixelSz*lines[1][i] + lineSz*lines[5][i], x + pixelSz*lines[2][i], y + pixelSz*lines[3][i] + lineSz*lines[5][i] );
                    p.line( x + pixelSz*(11 - lines[0][i]), y + pixelSz*lines[1][i] + lineSz*lines[5][i], x + pixelSz*(11 - lines[2][i]), y + pixelSz*lines[3][i] + lineSz*lines[5][i] );
                }
            }
        }
        for( var i = 0; i < lines[0].length; i++ ){
            p.stroke( r2, g2, b2 );
            p.line( x + pixelSz*lines[0][i], y + pixelSz*lines[1][i], x + pixelSz*lines[2][i], y + pixelSz*lines[3][i] );
            p.line( x + pixelSz*(11 - lines[0][i]), y + pixelSz*lines[1][i], x + pixelSz*(11 - lines[2][i]), y + pixelSz*lines[3][i] );
        }
    };

}

p5Man.add(new p5( sketch, 'watercolor_id' ));