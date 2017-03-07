//Víctor Ramírez, Marzo 02, 2017
//Implementación desde cero

var sketch = function( p ){
    p.setup = function() {
        p.createCanvas( 400, 400 );
    };

    p.draw = function() {
        p.background( 255 );
        var rectWidth = 50.0;//ancho del rectangulo
        p.strokeWeight(3);
        //coordenadas del rectangulo
        var x1 = (p.width - rectWidth) / 2.0;
        var x2 = (p.width + rectWidth) / 2.0;
        var y1 = 20.0;
        var y2 = p.height - y1;
        var d = 100.0;//distancia en x de los extremos de la linea al lado mas cercano del rectangulo
        var z = 25.0;//distancia entre rectas paralelas

        p.stroke( 255, 0, 0 );
        p.line( x1-d, y1, (x1+x2)/2.0, (y1+y2)/2.0 );
        p.stroke( 0, 255, 0 );
        p.line( x2+d, y2, (x1+x2)/2.0, (y1+y2)/2.0 );
        p.stroke( 0, 0, 255 );
        p.line( z*(x1 - 2*d - x2)/(y1-y2) + d + x2, y2, (x1+x2)/2.0, (y1+y2)/2.0-z );

        if( !p.mouseIsPressed ){
            p.noStroke();
            p.fill( 100 );
            p.rect( x1, y1, x2-x1, y2-y1 );
        }
    };
}

var myp5 = new p5( sketch, 'poggendorff_id' );