// Lilac Chaser
// Author: Jeremy Hinton
// Before 2005
// A sent message to Michael Bach
// https://en.wikipedia.org/wiki/Lilac_chaser
// JS port (p5.js 'instance mode') by Sergio Andres Castro

var sketch1 = function( p ) {

  p.setup = function() {
    p.createCanvas(400, 400);
    p.frameRate(7);
  };

  function drawBlurCircles(x, y, r) {
    p.push();
    p.push();
    //console.log(1);
    p.noStroke();
    var opc = 0.4;
    var step = 3.0/r;

    for (var i = r; i > 0; i-=1.5) {
      if (opc < 5) {
        opc += step;
        p.fill(255, 20, 180, opc);
        //console.log(step,r);
      }
      //console.log(4);
      p.ellipse(x, y, i, i);
    }
    p.pop();
    p.pop();
  };

  var jump = 0;
  var count = 0;
  p.draw = function() {
    p.background(200);
    var numCircles = 12;
    var stepAngle = 360.0/numCircles;
    p.push();
    p.translate(p.width/2.0, p.height/2.0);
    for (var i = 0; i < 360; i = i + stepAngle) {
      //console.log(stepAngle, i, jump);
      if (i != jump) {
        p.push();
        p.rotate(p.radians(i));
        drawBlurCircles(120, 0, 60);
        p.pop();
      }
    }
    if( !p.mouseIsPressed ) {
      jump = (jump + stepAngle)%360;
    }
    p.push();
    p.strokeWeight(1.5);
    p.line(-7, 0, 7, 0);
    p.line(0, -7, 0, 7);
    p.pop();
    p.pop();
  };
};

var myp5_1 = new p5(sketch1, 'lilacChaser_id');
