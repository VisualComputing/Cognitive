// Author: Jairo Suarez
// February 16, 2017
var c1,c2,c3;

var sketch3 = function(p) {
    p.setup = function() {
        p.createCanvas(440, 320);
        c1 = "#323232"; // left color
        c2 = "#C7C7C7"; // right color
        c3 = "#787878"; // block color
        p.smooth();
        p.noLoop();
    };

    // adapted from: https://p5js.org/examples/color-linear-gradient.html
    function setGradient(x, y, w, h, c1, c2) {
        p.noFill();
        // Left to right gradient
        for (var i = x; i <= x + w; i++) {
            var inter = p.map(i, x, x + w, 0, 1);
            var c = p.lerpColor(c1, c2, inter);
            p.stroke(c);
            p.line(i, y, i, y + h);
        }
    }

    p.mouseClicked = function() {
        if (c2 == "#C7C7C7") {
            c2 = "#323232";
        } else {
            c2 = "#C7C7C7";
        }
        p.draw();
    };

    p.draw = function() {
        setGradient(0, 0, p.width, p.height, c1, c2);
        p.noStroke();
        p.fill(c3);
        p.rect(30, 140, 380, 40);
    };
};

var myp5_3 = new p5(sketch3, 'color_gradient_id');
