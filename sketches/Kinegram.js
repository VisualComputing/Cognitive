/*author: Diego Alejandro Guevara Rocha
          Luis Fernando Valderrama Vinchery
          Juan Manuel Corredor Roldan

Kinegram impplentation whit 4 frames of a gif
November 2017
*/



var sketch9 = function( p ){
  // Se precargan las 4 imagenes que serán usadas.
  p.preload = function() {
    img1=p.loadImage("fig/kinegrama1.jpg")
    img2=p.loadImage("fig/kinegrama2.jpg")
    img3=p.loadImage("fig/kinegrama3.jpg")
    img4=p.loadImage("fig/kinegrama4.jpg");
  };

  var tam= 456;
    // Creamos un Canvas del tamaño de las imagenes.
  p.setup = function () {
    img1.resize(tam,tam);
    img2.resize(tam,tam);
    img3.resize(tam,tam);
    img4.resize(tam,tam);
    p.createCanvas ( tam , tam );
  };

  var contador = - 100 ;

  p.draw = function() {
    img1.loadPixels ();
    img2.loadPixels ();
    img3.loadPixels ();
    img4.loadPixels ();
    p.loadPixels ();

    //se obtienen los pixeles de las imagenes y se colocan en el fondo
    for (var i = 0 ; i < 4 * tam * tam ; i += 4 ) {
      if ( ( ( i/4 ) %12) <3)
        aux = img1;
      else if ( ( ( i/4 ) %12) <6)
        aux = img2;
      else if ( ( ( i/4 ) %12) <9)
        aux = img3;
      else
        aux = img4;
      p.pixels[i] = aux.pixels[i];
      p.pixels[i+1] = aux.pixels[i+1];
      p.pixels[i+2] = aux.pixels[i+2];
    }
    p.updatePixels ();
    contador++;
    //se pasan las barras negras por encima
    for (var j = 0 ; j < tam*2 ; j += 12 ){
      p.fill(0);
      p.rect( contador+j , 0 , 9 , tam );
    }
    if (contador >= 700)
      contador = -100 ;
  };
};

var kinegram_p5 = new p5(sketch9, 'Kinegram');
