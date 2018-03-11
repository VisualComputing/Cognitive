/*
explanation: http://www.geek.com/news/10-astonishing-optical-illusion-gifs-1575117/ 
Implemented by: Fabián Monsalve
Fix Miguel Ballén, Iván Rojas, Tania Hurtado due new library features illusion
wasn´t working properly
*/

var outside = 170;
var inside = 25;
var shift = true;

var illusory_square_sketch = function (p) {
  p.setup = function () {
    p.createCanvas(600, 450);
  };

  p.draw = function () {
    p.background(0);

    p.rectMode(p.CENTER);
    p.noFill();
    p.stroke(255);
    p.rect(p.width / 2, p.height / 2, 150, 150);

    p.fill(150);
    p.noStroke();

    // elipses grandes
    p.ellipse((p.width / 2), (p.height / 2) - outside, 100, 100);
    p.ellipse((p.width / 2), (p.height / 2) + outside, 100, 100);
    p.ellipse((p.width / 2) - outside, (p.height / 2), 100, 100);
    p.ellipse((p.width / 2) + outside, (p.height / 2), 100, 100);

    p.fill(255);
    p.noStroke();
    // elipses peequeñas
    p.ellipse((p.width / 2), (p.height / 2) - inside, 30, 30);
    p.ellipse((p.width / 2), (p.height / 2) + inside, 30, 30);
    p.ellipse((p.width / 2) - inside, (p.height / 2), 30, 30);
    p.ellipse((p.width / 2) + inside, (p.height / 2), 30, 30);


    if (shift) {
      if (outside >= 170) {
        shift = false;
        outside -= 7.9;
        inside += 7.9;
      } else {
        outside += 7.9;
        inside -= 7.9;
      }
    } else {
      if (outside <= 85) {
        shift = true;
        outside += 7.9;
        inside -= 7.9;
      } else {
        outside -= 7.9;
        inside += 7.9;
      }
    }
  }
}

var myp5_7 = new p5(illusory_square_sketch, 'IllusorySquare_id');