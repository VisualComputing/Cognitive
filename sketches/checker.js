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
