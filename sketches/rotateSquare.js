/**
  * Author: Carlos Tovar Bonilla
  * September 20, 2017
  *
  * Rotate Square Illusion
  *
**/

var angle = 0;
var speed;
var sketch1 = function (p) {
    p.setup = function () {
        var myCanvas = p.createCanvas(600, 600);
    };

    p.draw = function () {

        p.background(255, 255, 255);
        rotateSquare();
    };

    //Función principal, pinta los cuadros color naranja
    function rotateSquare() {

        rotateSquare1();
        if (!p.mouseIsPressed) {
            p.resetMatrix();
            p.strokeWeight(0);
            p.stroke(0);
            p.fill(255, 140, 0);

            p.rect(0, 0, 281, 281);
            p.rect(318, 0, 281, 281);
            p.rect(0, 318, 281, 281);
            p.rect(318, 318, 281, 281);
        }
    }

    //Función que pinta el cuadro azul que rota en el fondo
    function rotateSquare1() {
        p.push();
        speed = 0.05;
        angle += speed; //Se asigna el angulo de rotación con la velocidad

        p.strokeWeight(0);
        p.stroke(0);
        p.fill(0, 0, 255);
        p.translate(p.width / 2, p.height / 2);
        p.rotate(angle);
        p.rect(-187.5, -187.5, 375, 375);
        p.pop();
    }

};

var myp5_1 = new p5(sketch1, 'rotateSquare_id');
