//Víctor Ramírez, Marzo 02, 2017
//Implementación desde cero

var sketch = function( p ){
    p.setup = function() {
        p.createCanvas( 400, 400 );
    };

    p.draw = function() {
        p.background( 0 );
        p.noStroke();
        var rectW = p.width/5.0;
        var rowHeight = 20.0;
        var rectColor = 100.0;
        var cur = 0; 
        var backColor = (p.mouseIsPressed) ? 0 : 255;
        for( var y = 0; y < p.height; y += rowHeight ){
            if( cur == 0 ){
                p.fill( backColor );
                p.rect( 0, y, rectW, rowHeight );
                p.rect( 2*rectW, y, 3*rectW, rowHeight );
                p.fill( rectColor );
                p.rect( rectW, y, rectW, rowHeight );
            }
            else{
                p.fill( rectColor );
                p.rect( 3*rectW, y, rectW, rowHeight );
            }
            cur = (cur + 1) % 2;
        }
    };
}

new p5( sketch, 'whites_id' );
