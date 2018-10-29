// Wagon Wheel (stagecoach-wheel effect or stroboscopic effect)
// Author: William Albert Hugh Rushton
// December 23 of 1967
// Effect of Humming on Vision
// https://www.nature.com/nature/journal/v216/n5121/abs/2161173a0.html
// https://en.wikipedia.org/wiki/Wagon-wheel_effect
// JS port (p5.js 'instance mode') by Sergio Andres Castro

var sketch = function( p ) {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  var WWAccel = 0.2;
  var WWSpeed = 0.0;

  p.draw = function() {
    p.background(255);
    p.push();
    p.fill(0);
    p.translate(p.width/2.0, p.height/2.0);
    for (var i = 0; i < 360; i = i + 72) {
      p.push();
      p.rotate(p.radians(i+180+WWSpeed));
      p.rect(-6.25, 12.5, 12.5, 45);
      p.pop();
    };
    p.fill(0);
    for (var i = 0; i < 360; i = i + 60) {
      p.push();
      p.rotate(p.radians(i+180+WWSpeed));
      p.rect(-6.25, 57.5, 12.5, 90);
      p.pop();
    };
    p.pop();
    if ( !p.mouseIsPressed ) {
      WWSpeed += WWAccel;
      WWAccel +=0.2;
    } else {
      WWAccel = 0;
    };
  };
};

p5Man.add(new p5(sketch, 'wagonWheel_id'));
