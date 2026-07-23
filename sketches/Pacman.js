/**
 * Created by juan on 4/03/17.
 */

/*
 Ilusión 3: Lilac Chaser o Pacman
 Autor: Jeremy Hinton (some time before 2005) URL: [Hinton's “Lilac Chaser" - Michael Bach's site]
 (http://www.michaelbach.de/ot/col-lilacChaser/index.html).

 Resumen (tomado de URL: [Lilac chaser - Wikipedia](https://en.wikipedia.org/wiki/Lilac_chaser)): La ilusión fue creada
 por Jeremy Hinton algún   momento antes de 2005. Tropezó con la configuración mientras ideaba estímulos para
 experimentos de movimiento visual. En una versión de un programa para mover un disco alrededor de un punto central,
 erróneamente olvidó borrar el disco anterior, lo que creó la apariencia de un espacio en movimiento. Al notar la
 imagen posterior en movimiento del disco verde, ajustó los colores de primer plano y de fondo, el número de discos y
 la temporización para optimizar el efecto.

 Implementado desde cero durante la clase de criptografia.
*/

var circles = 12, active = false;
var cir = 2*Math.PI, ratio = cir / circles;
var x = 225, d = 65, r = 180, pw = 1, D2 = d/6;
var init = 0.3, e = init;

var sketch9 = function( p ) {
    p.setup = function() {
        p.createCanvas(450, 450);
		p.noStroke();
    };

	function pacman(){
		p.frameRate(40);
		p.background(191);
		p.fill(221, 146, 221);
		for(var i = init; i <= cir; i += ratio){
		    if(i != e)
		        p.ellipse(p.cos(i)*r+x, p.sin(i)*r+x, d, d);
		}

		//filter() requiers a lot of computational resources, the frame rete may vary depending on the computer
		//and other illusions from the presentation may get slow too

		if(active)
			p.filter(p.BLUR, 6);

		p.fill(0);
		p.rect(x-pw, x-D2, pw*2, D2*2);
		p.rect(x-D2, x-pw, D2*2, pw*2);
		if(active)
		    e+=ratio;
		if ( e > cir )
		    e = init;
	};

	p.keyPressed = function() {
		if(p.keyCode === 65)
			active = !active;
	};

	p.draw = function(){
		pacman();
	};
};
var myp5_9 = new p5(sketch9, 'pacman_id');


