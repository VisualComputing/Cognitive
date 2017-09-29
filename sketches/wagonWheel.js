var sketch1 = function( p ) {
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

var myp5_1 = new p5(sketch1, 'wagonWheel_id');
