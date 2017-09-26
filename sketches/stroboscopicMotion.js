/**
  * Author: Carlos Tovar Bonilla
  * September 20, 2017
  *
  * Stroboscopic Motion
  *
**/

var firstPair = false;
var sketch = function (p) {
    p.setup = function () {
        var myCanvas = p.createCanvas(600, 600);
    };

    p.draw = function () {
        p.background(192, 255, 255);
        p.frameRate(2);
        stroboscopicMotion();
    };

    //Funcion principal, pinta un par de puntos según el estado de @firstPair
    function stroboscopicMotion() {
        p.background(192, 192, 192);
        p.strokeWeight(100);
        p.stroke(0, 0, 255);
        if (firstPair) {
            p.point(150, 150);
            p.point(450, 450);
        } else {
            p.point(450, 150);
            p.point(150, 450);
        }
        firstPair = !firstPair;
    };
};

new p5(sketch, 'stroboscopicMotion_id');
