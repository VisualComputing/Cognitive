// Pinna Illusion (Spiral Effect)
// Author: Dr. Biangio Pinna
// (Pinna & Gregory 2002)
// Posterior work over original illusion
// http://www.scholarpedia.org/article/Pinna_illusion
// JS port (p5.js 'instance mode') by Sergio Andres Castro

var sketch1 = function( p ) {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  function circleOfRects(y, r, rot, numRect) {
    var count = 0;
    var step = 360/numRect;
    for (var i = 0; i < 360; i += step) {
      p.push();
      p.push();
      p.noFill();
      if (count % 2 == 0) {
        p.stroke(255);
      } else {
        p.stroke(0);
      };
      p.rotate(p.radians(i));
      p.push();
      p.translate(0, y);
      p.rotate(p.radians(rot));
      p.rect(0, 0, r, r);
      p.pop();
      p.pop();
      p.pop();
      count+=1;
    };
  };

  p.draw = function() {
    p.background(127);
    p.push();
    p.translate(p.width/2.0, p.height/2.0);
    circleOfRects(38, 11, 12, 16);
    circleOfRects(75, 11, -20, 28);
    circleOfRects(102, 11, 10, 42);
    circleOfRects(140, 11, -20, 56);
    if ( p.mouseIsPressed ){
      p.push();
      p.strokeWeight(3);
      p.stroke(255);
      p.noFill();
      p.ellipse(0,0,125,125);
      p.ellipse(0,0,185,185);
      p.ellipse(0,0,255,255);
    };
    p.pop();
  };
};

var myp5_1 = new p5(sketch1, 'pinna_id');
