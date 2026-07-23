<<<<<<< HEAD
/**
  * Author: Carlos Tovar Bonilla
  * September 20, 2017
  *
  * Checker Illusion
  *
**/

var sketch = function (p) {
    p.setup = function () {
      var myCanvas = p.createCanvas(600, 600);
    };

    p.draw = function () {
      p.background(192, 255, 255);
      checker();
    };

    //Función principal, encargada de pintar la cuadricula de fondo
    function checker() {

        var step = p.height / 10;
        var doubleStep = step * 2;
        var random;
        var pattern = "01011010010"; //Patrón encargado de pintar los rombos entre la cuadricula

        p.background(192, 255, 255);

        p.strokeWeight(0);
        p.stroke(0, 0, 0);
        p.fill(0, 255, 0);

        for (var i = 0; i <= p.width; i = i + doubleStep) {
            for (var j = 0; j <= p.height; j = j + doubleStep) {
                p.rect(i, j, step, step);
            }
        }

        for (var i = step; i <= p.width; i = i + doubleStep) {
            for (var j = step; j <= p.height; j = j + doubleStep) {
                p.rect(i, j, step, step);
            }
        }

        if (!p.mouseIsPressed) {
            for (var y = 0; y < pattern.length; y++) {
                for (var x = 0; x < pattern.length; x++) {
                    var ch = pattern.charAt(x);
                    quadChecker(x * step, y * step, step, ch == '0');
                }
                pattern = rotateString(pattern);
            }
        }
    }

    //Función que rota el patrón
    function rotateString(s) {
        var lastChar = s.charAt(s.length - 1);
        return String(lastChar + s.substring(0, s.length - 1));
    }

    //Función que recibe como parámetros la posición en la cual se pintarán los rombos
    function quadChecker(stepX, stepY, distance, position) {
        var height = distance / 5;
        var mheight = height / 2;

        p.strokeWeight(0);
        p.stroke(0, 0, 0);

        if (position) {
            p.fill(0, 0, 0);
            p.quad(stepX, stepY - height, stepX + mheight, stepY - mheight, stepX, stepY, stepX - mheight, stepY - mheight);
            p.quad(stepX, stepY, stepX + mheight, stepY + mheight, stepX, stepY + height, stepX - mheight, stepY + mheight);

            p.fill(255, 255, 255);
            p.quad(stepX - mheight, stepY - mheight, stepX, stepY, stepX - mheight, stepY + mheight, stepX - height, stepY);
            p.quad(stepX + mheight, stepY - mheight, stepX + height, stepY, stepX + mheight, stepY + mheight, stepX, stepY);
        } else {
            p.fill(255, 255, 255);
            p.quad(stepX, stepY - height, stepX + mheight, stepY - mheight, stepX, stepY, stepX - mheight, stepY - mheight);
            p.quad(stepX, stepY, stepX + mheight, stepY + mheight, stepX, stepY + height, stepX - mheight, stepY + mheight);

            p.fill(0, 0, 0);
            p.quad(stepX + mheight, stepY - mheight, stepX + height, stepY, stepX + mheight, stepY + mheight, stepX, stepY);
            p.quad(stepX - mheight, stepY - mheight, stepX, stepY, stepX - mheight, stepY + mheight, stepX - height, stepY);

        }
    }
};


p5Man.add(new p5(sketch, 'checker_id'));
=======
//Author: Alvaro Rodriguez
//March 7th 2017

//Implementado desde 0
var c = 0;

var sketch8 = function( p ){
	var n = 10;
	p.setup = function(){
		var myCanvas = p.createCanvas(400, 400);
		p.background(192,255,255);
	};

	p.draw = function(){
	
	//Draw matriz (green squares)
	p.background(192,255,255);
  	var n = 10;
  	for(var j = 0;  j < 10; j++){
    	for(var i = 0; i < 10; i++){
      	p.fill(0,255,0);
      	p.noStroke();
    	if(j %2 == 0 && i % 2 == 0)
    		p.rect(i*40,j*40,40,40);
    	else if(j % 2 != 0 && i %2 !=0)
      		p.rect(i*40,j*40,40,40);
    	}
    }
	 
	if(!p.mouseIsPressed){
		var k;
		var c = 1;

		for(var i = n-1; i >=1; i--){
		    k = i;
		    for(var j = 1; j <= n-i; j++){
		      if(i == 9 || i == 8 || i == 6 || i == 3 || i == 1){
		        p.fill(255,255,255);
		          p.noStroke();

			      p.triangle((k*40),(j*40)-9,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5,(j*40)-4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)+4.5,(j*40)-4.5);
		          
		          p.triangle((k*40),(j*40)+9,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)+4.5,(k*40)+4.5,(j*40)+4.5);
		          
		          p.fill(0);
		          p.triangle((k*40)-9,(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5);
		          
		          p.triangle((k*40)+9,(j*40),(k*40)+4.5,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)+4.5,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5);
		      }
		      else{
		         p.fill(0);
		          p.noStroke();
		          p.triangle((k*40),(j*40)-9,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5,(j*40)-4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)+4.5,(j*40)-4.5);
		          
		          p.triangle((k*40),(j*40)+9,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)+4.5,(k*40)+4.5,(j*40)+4.5);
		          
		          p.fill(255,255,255);
		          p.triangle((k*40)-9,(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)-4.5,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5);
		          
		          p.triangle((k*40)+9,(j*40),(k*40)+4.5,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5);
		          p.triangle((k*40),(j*40),(k*40)+4.5,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5); 
		      }
		      k++;
		      c++;
		    }
	    }

	    for(var i = 2; i <= n-1; i++){
			k = i;
		    for(var j = 1; j <= n-i; j++){
		     if(i == 2 || i == 4 || i == 7 || i == 9){
		       p.fill(255,255,255);
		          p.noStroke();
		          p.triangle((j*40),(k*40)-9,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5,(k*40)-4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)+4.5,(k*40)-4.5);
		          
		          p.triangle((j*40),(k*40)+9,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)+4.5,(j*40)+4.5,(k*40)+4.5);
		          
		          p.fill(0);
		          p.triangle((j*40)-9,(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5);
		          
		          p.triangle((j*40)+9,(k*40),(j*40)+4.5,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)+4.5,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5);
		     }else{
		       p.fill(0);
		          p.noStroke();
		          p.triangle((j*40),(k*40)-9,(j*40)-4.5,(k*40)-4.5,(j*40)+4.5,(k*40)-4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)+4.5,(k*40)-4.5);
		          
		          p.triangle((j*40),(k*40)+9,(j*40)-4.5,(k*40)+4.5,(j*40)+4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)+4.5,(j*40)+4.5,(k*40)+4.5);
		          
		          p.fill(255,255,255);
		          p.triangle((j*40)-9,(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)-4.5,(k*40)-4.5,(j*40)-4.5,(k*40)+4.5);
		          
		          p.triangle((j*40)+9,(k*40),(j*40)+4.5,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5);
		          p.triangle((j*40),(k*40),(j*40)+4.5,(k*40)-4.5,(j*40)+4.5,(k*40)+4.5);
		     }           
		      k++;
		    }
		  }
	} 

	  	
	};

}

var myp5_8 = new p5(sketch8, 'checker_id');
>>>>>>> aldrodriguezca/gh-pages
