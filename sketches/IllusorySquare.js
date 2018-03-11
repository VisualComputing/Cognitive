/*
explanation: http://www.geek.com/news/10-astonishing-optical-illusion-gifs-1575117/ 
Implemented by: Fabián Monsalve
Fix Miguel Ballén, Iván Rojas, Tania Hurtado due new library features illusion
wasn´t working properly
*/

let outsidePosition = 170;
let insidePosition = 25;
let separateEllipses = true;


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
    p.noStroke();// no border

    evaluateState(outsidePosition, separateEllipses);

      // elipses grandes
          p.ellipse((p.width / 2), (p.height / 2) - outsidePosition, 100, 100);
          p.ellipse((p.width / 2), (p.height / 2) + outsidePosition, 100, 100);
          p.ellipse((p.width / 2) - outsidePosition, (p.height / 2), 100, 100);
          p.ellipse((p.width / 2) + outsidePosition, (p.height / 2), 100, 100);

          p.fill(255);
          p.noStroke();
          // elipses pequeñas
          p.ellipse((p.width / 2), (p.height / 2) - insidePosition, 30, 30);
          p.ellipse((p.width / 2), (p.height / 2) + insidePosition, 30, 30);
          p.ellipse((p.width / 2) - insidePosition, (p.height / 2), 30, 30);
          p.ellipse((p.width / 2) + insidePosition, (p.height / 2), 30, 30);

  }
}



function evaluateState(position, animationState){

      if (outsidePosition >= 170) {
        separateEllipses = false;
      }
      if (outsidePosition <= 85) {
        separateEllipses = true;
      }
      if(separateEllipses == true){
        outsidePosition += 3;
        insidePosition -= 3;
      }
      else{
        outsidePosition -= 3;
        insidePosition += 3;
      }
}
var myp5_7 = new p5(illusory_square_sketch, 'IllusorySquare_id');