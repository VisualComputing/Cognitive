// Silencing
// Author: Jordan Suchow and George Alvarez
// January 06 of 2011
// Motion Silences Awareness of Visual Change
// http://www.cell.com/current-biology/abstract/S0960-9822(10)01650-7
// https://en.wikipedia.org/wiki/Motion_silencing_illusion
// JS port (p5.js 'instance mode') by Sergio Andres Castro

var sketch = function( p ) {
  var coord2 = [];
  var colorstart2 = [];

  p.setup = function() {
    p.createCanvas(400, 400);
    circleOfCircles(80, 50, 125, 20, coord2, colorstart2);
  };

  var colorx = 0;

  function circleOfCircles(n, minr, maxr, indr, coord, colorstart) {
    var xp = 0.0;
    var yp = 0.0;
    for (var i = 0; i < n; i += 1) {
      p.push();
      p.noStroke();
      xp = p.random(-maxr, maxr);
      yp = p.random(-maxr, maxr);
      if (p.pow(xp, 2)+p.pow(yp, 2) < p.pow(maxr, 2) && p.pow(xp, 2)+p.pow(yp, 2) > p.pow(minr, 2)) {
        var temp = 1;
        for (var j = 0; j < coord.length; j+=1) {
          if (p.pow(xp-coord[j][0], 2)+p.pow(yp-coord[j][1], 2) <= p.pow(indr, 2)) {
            temp = 0;
            break;
          };
        };
        if (temp == 1) {
          colorstart.push(p.random(255));
          var t = [xp, yp];
          coord.push(t);
        } else {
          i-=1;
        }
      } else {
        i-=1;
      }
      p.pop();
    };
  };

  var rg1 = 0;
  var rs1 = p.random(0.5, 1);

  p.draw = function() {
    p.background(204);
    p.push();
    p.translate(p.width/2.0, p.height/2.0);
    p.rotate(p.radians(rg1+rs1));
    p.push();
    p.strokeWeight(5);
    p.stroke(255);
    p.point(0, 0);
    p.pop();
    for (var i = 0; i < coord2.length; i +=1) {
      p.push();
      p.colorMode(p.HSB);
      p.noStroke();
      p.fill((colorstart2[i]+(colorx))%255, 255, 255);
      var t = coord2[i];
      p.ellipse(t[0], t[1], 10, 10);
      p.pop();
    }
    p.pop();
    colorx= colorx + 0.5;
    if ( !p.mouseIsPressed ) {
      if (p.millis() % 0.5 == 0) {
        rs1*=-1;
      }
      rg1+=(2*rs1);

    }
  };
};

p5Man.add(new p5(sketch, 'silencing_id'));
